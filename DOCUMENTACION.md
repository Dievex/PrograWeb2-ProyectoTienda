# Documentación Técnica del Proyecto: Tienda de Componentes (Svelte 5)

Este documento describe la implementación completa del frontend migrado a **Svelte 5 + Vite**, detallando cómo se ha cumplido cada uno de los requisitos establecidos en las instrucciones originales.

---

## 1. Estructura del Proyecto (Requisito Mínimo)

Se ha inicializado el proyecto utilizando **Vite** con la plantilla oficial de Svelte 5. Se ha mantenido la estructura de carpetas solicitada para organizar el código de manera modular.

### Organización de Directorios
El proyecto sigue una arquitectura modular y por capas, separando claramente las responsabilidades tanto en el frontend como en el backend.

#### Frontend (Svelte 5)
La carpeta `frontend-svelte/src/` está estructurada de la siguiente manera:

*   **`api/`**: Contiene la lógica de comunicación pura con el backend usando `fetch`. Aquí se definen las peticiones HTTP (`client.ts`, `auth.api.ts`, `cart.api.ts`, `products.api.ts`). Su única responsabilidad es enviar y recibir datos.
*   **`models/`**: Define las interfaces y tipos de TypeScript (`product.model.ts`, `cart.model.ts`). Actúa como el contrato de datos que usa toda la aplicación frontend.
*   **`mappers/`**: Contiene funciones (`product.mapper.ts`, `cart.mapper.ts`) encargadas de transformar los datos crudos que llegan del backend (DTOs) hacia los modelos estructurados del frontend. Esto aísla a la UI de posibles cambios en la estructura de la API.
*   **`services/`**: Actúan como intermediarios u orquestadores. Los servicios (`product.service.ts`, `cart.service.ts`, `auth.service.ts`) llaman a la capa `api`, pasan la respuesta por la capa `mappers` y entregan los datos limpios a los Stores o Componentes.
*   **`stores/`**: Gestión del estado global reactivo utilizando las nuevas Runes de Svelte 5 (`auth.svelte.ts`, `cart.svelte.ts`, `products.svelte.ts`, `router.svelte.ts`). Consumen los `services` para obtener datos y los exponen a la interfaz.
*   **`components/`**: Componentes visuales reutilizables (`Navbar`, `ProductCard`, `ProductForm`, `UserRow`, `CartDrawer`). Solo se encargan de la presentación y delegan la lógica a los Stores o reciben datos por props.
*   **`pages/`**: Vistas principales de la aplicación (`Login`, `Register`, `Products`, `Admin`, `Profile`). Actúan como contenedores que ensamblan componentes y conectan con el estado global.

#### Backend (Node.js + Express)
La carpeta `backend/src/` sigue un patrón MVC (Modelo-Vista-Controlador) enriquecido con servicios:

*   **`models/`**: Define los esquemas de Mongoose para MongoDB (`Producto.js`, `User.js`, etc.). Representan la estructura de datos en la base de datos.
*   **`controllers/`**: Manejan las solicitudes HTTP entrantes (`req`, `res`). Extraen los parámetros, llaman a los servicios correspondientes y devuelven la respuesta HTTP adecuada (códigos de estado y JSON).
*   **`services/`**: Contienen la lógica de negocio pura. Los controladores delegan en los servicios las operaciones complejas (ej. calcular totales, verificar stock, encriptar contraseñas) antes de interactuar con los modelos.
*   **`routes/`**: Definen los endpoints de la API REST (ej. `GET /productos`, `POST /login`) y los asocian con sus respectivos métodos en los controladores. También aplican middlewares.
*   **`middleware/`**: Funciones intermedias que se ejecutan antes de los controladores, como la verificación de tokens JWT (`authMiddleware.js`) o el límite de peticiones (`rateLimiter.js`).
*   **`config/`**: Archivos de configuración para conexiones a bases de datos (`db.js`, `redis.js`) y herramientas de terceros (`swagger.js`).

---

## 2. Autenticación y Seguridad (Requisito Mínimo)

Se ha implementado un sistema de autenticación robusto basado en **JWT**.

*   **Login y Registro**: Formularios en `Login.svelte` y `Register.svelte` que comunican con el backend.
*   **Protección de Rutas**: En `App.svelte`, utilizamos un efecto (`$effect`) que verifica si el usuario está autenticado. Si no lo está y trata de acceder a una ruta privada, es redirigido automáticamente al login.
*   **Persistencia**: Aunque las instrucciones pedían memoria como mínimo, implementamos persistencia en `localStorage` (opcional +2 pts) para mejorar la UX.

```typescript
// src/stores/auth.svelte.ts
export function createAuthStore() {
  let token = $state<string | null>(localStorage.getItem('token'));
  // ... lógica para decodificar usuario del token
}
```

---

## 3. Consumo de API y CRUD de Productos (Requisito Mínimo)

La gestión de productos es el núcleo de la tienda.

*   **Listado**: `Products.svelte` carga los productos al montarse (`onMount`) usando `productsApi.getAll()`.
*   **Creación y Edición**: Se utiliza un formulario modal (`ProductForm.svelte`) que soporta **FormData** para enviar imágenes al servidor junto con los datos del producto.
*   **Borrado**: Implementado con confirmación previa (`confirm()`) y actualización optimista de la lista.
*   **Imágenes**: Las imágenes se sirven desde la carpeta `uploads` del backend o vía URL externa.

---

## 4. Navegación SPA (Requisito Mínimo)

Hemos implementado un **Router personalizado** ligero y reactivo en `router.svelte.ts` para manejar la navegación sin recargar la página (SPA).

*   **Navbar**: Muestra enlaces diferentes según el rol del usuario (Admin ve "Usuarios").
*   **Estado Activo**: Resalta la sección actual usando clases condicionales de Tailwind.
*   **Responsividad**: Menú hamburguesa desplegable para móviles.

---

## 5. Estilos y UX (Requisito Mínimo)

*   **Tailwind CSS**: Se ha configurado con una paleta de colores personalizada (tonos verdes `primary-600`) para dar un aspecto moderno y limpio.
*   **Feedback Visual**:
    *   **Toasts**: Sistema de notificaciones flotantes para éxito/error.
    *   **Skeletons**: Hemos reemplazado los spinners de carga tradicionales por esqueletos (`animate-pulse`) en la lista de productos y la tabla de usuarios, mejorando la percepción de velocidad y estructura visual.
    *   **Truncado de texto**: Botón "Ver más/menos" en descripciones largas.

---

## 6. Uso de Funcionalidades Svelte 5 (Puntos Extra)

Esta es la parte central de la modernización, utilizando las nuevas **Runes**.

### A. Estado y Derivados (`$state`, `$derived`)
En lugar de `writable` stores, usamos clases o funciones que retornan estado reactivo simple.

**Ejemplo: Filtrado de Productos en Tiempo Real**
```typescript
// src/pages/Products.svelte
let searchQuery = $state('');

// $derived recalcula el array automáticamente solo cuando cambia la búsqueda o la lista
let filteredProducts = $derived(() => {
  if (!searchQuery) return productsStore.products;
  return productsStore.products.filter(p => 
    p.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );
});
```

### B. Efectos (`$effect`)
Utilizado para sincronizar estado global con efectos secundarios.

**Ejemplo: Sincronización del Token**
```typescript
// src/stores/auth.svelte.ts
$effect(() => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
});
```

### C. Props y Callbacks (`$props`)
Los componentes hijos no modifican datos directamente, sino que comunican acciones al padre mediante callbacks.

**Ejemplo: Componente `UserRow.svelte`**
```svelte
<script>
  let { user, onToggleRole, onDelete } = $props();
</script>

<button onclick={() => onToggleRole(user)}>Cambiar Rol</button>
```

### D. Snippets y Renderizado (`#snippet`)
Hemos adoptado la nueva sintaxis de Svelte 5 para reutilizar trozos de UI y manejar lógica condicional limpia.

**Ejemplo: Estados de Carga**
```svelte
{#snippet loadingState()}
  <div class="spinner">...</div>
{/snippet}

<!-- Renderizado condicional limpio -->
{#if loading}
  {@render loadingState()}
{:else}
  {@render productList()}
{/if}
```

### E. Bloques `{:else}` en Bucles
Para manejar listas vacías de forma nativa.

```svelte
{#each users as user}
  <UserRow {user} />
{:else}
  <p>No hay usuarios registrados.</p>
{/each}
```

---

## 7. Funcionalidades Avanzadas (Opcionales)

### A. Gestión de Usuarios y Roles
Panel de administración (`Admin.svelte`) exclusivo para usuarios con `role: 'admin'`. Permite ver todos los usuarios, promoverlos/degradarlos y eliminarlos.

### B. Carrito de Compras y Stock
*   **Store Global**: `cart.svelte.ts` mantiene el estado del carrito accesible desde cualquier componente.
*   **Checkout Real**: Al finalizar la compra, el frontend se comunica con el backend para:
    1.  Verificar stock disponible.
    2.  Descontar el stock en la base de datos.
    3.  Vaciar el carrito.
*   **Reactividad**: El stock visual en el catálogo de productos se actualiza **instantáneamente** tras la compra sin recargar la página.

### C. Manejo Avanzado de Formularios
*   Uso de `FormData` para envío de archivos.
*   Validación de contraseñas en registro.
*   Deshabilitación de botones (`isSaving`) para evitar doble envío.

---

## Conclusión

El proyecto cumple con el 100% de los requisitos obligatorios y opcionales, implementando una arquitectura moderna basada puramente en las nuevas capacidades de **Svelte 5**, resultando en una aplicación rápida, reactiva y fácil de mantener.
