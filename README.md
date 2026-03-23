# Proyecto Tienda - Programación Web 2

Este repositorio contiene el código fuente para el proyecto de la asignatura Programación Web 2. El proyecto se divide en un **Backend (Node.js/Express)** y un **Frontend (Svelte 5)**.

## Requisitos Previos
- **Node.js** (LTS recomendado, v18 o superior)
- **NPM** o **PNPM**
- **MongoDB** (si se ejecuta localmente, o usar MongoDB Atlas según el `.env` del backend)
- **Redis** (Debe estar instalado y en ejecución localmente en el puerto 6379, o configurado mediante la variable `REDIS_URL` en el `.env`)

---

## 1. Instrucciones de Instalación y Ejecución

### Backend (`/ProyectoTiendaPW2/backend`)
1. Abrir una terminal en el directorio del backend:
   ```bash
   cd ProyectoTiendaPW2/backend
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno:
   Copiar el archivo `.env.example` a `.env` y configurar las variables requeridas (como `MONGO_URI`, `JWT_SECRET`, etc.).
4. Ejecutar el servidor:
   ```bash
   npm run dev
   ```
   El servidor normalmente correrá en `http://localhost:3000`.

### Frontend Svelte (`/ProyectoTiendaPW2/frontend-svelte`)
1. Abrir otra terminal en el directorio del frontend:
   ```bash
   cd ProyectoTiendaPW2/frontend-svelte
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Configurar la conexión al backend (si es necesario):
   Por defecto, las llamadas apuntan a `http://localhost:3000/api` (configurado en `src/services/api.ts`).
4. Levantar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

Para compilar a producción:
```bash
npm run build
npm run preview
```

---

## 2. Runas de Svelte 5 Utilizadas

El frontend se construyó aprovechando las nuevas funcionalidades de reactividad de **Svelte 5**, utilizando **Runas** en lugar de la reactividad basada en asignaciones clásicas.

A continuación, se detalla en qué componentes se emplean y para qué:

### Componentes y Páginas (`/src/pages` y `/src/components`)

- **`src/App.svelte`**
  - `$derived`: Calcula la página actual (`CurrentPage`) de manera reactiva en base al estado de autenticación y la ruta.
  - `$effect`: Redirige automáticamente al usuario según su estado de sesión (por ejemplo, a `/login` si no está logueado).

- **`src/components/Navbar.svelte`**
  - `$state`: Maneja la apertura y cierre del menú en vista móvil (`isMobileMenuOpen`).
  - `$derived.by`: Genera los ítems de navegación de forma reactiva, mostrando u ocultando opciones (como "Admin") dependiendo del rol del usuario.

- **`src/components/ProductForm.svelte`**
  - `$props`: Recibe de forma tipada las propiedades (`product`, `onsubmit`, `oncancel`).
  - `$state`: Mantiene el estado interno del formulario (datos del producto actual y archivo de imagen).
  - `$effect`: Inicializa o actualiza el estado interno si el producto propuesto cambia (útil al editar un producto).

- **`src/components/ProductCard.svelte` y `src/components/UserRow.svelte`**
  - `$props`: Definen y consumen las propiedades pasadas por el componente padre (información del producto/usuario y callbacks de acciones).
  - `$state` (en ProductCard): Controla localmente si se muestra la descripción completa de un producto.

- **Formularios de Autenticación (`Login.svelte`, `Register.svelte`)**
  - `$state`: Controla las variables de los inputs (`username`, `password`, `confirmPassword`) y los indicadores de carga (`loading`).

- **Listados (`Admin.svelte`, `Products.svelte`)**
  - `$state`: Mantiene el listado de usuarios, términos de búsqueda, apertura de modales y estado de carga de la página.
  - `$derived` (en Products): Filtra el arreglo de productos de forma automática cuando el texto de búsqueda cambia.

### Tiendas Reactivas (`/src/stores`)
Svelte 5 permite crear lógica reactiva en archivos TypeScript/JavaScript usando la extensión `.svelte.ts`.

- **`auth.svelte.ts`**: Usa `$state` para el token y la información del usuario. Usa `$effect.root` y `$effect` para sincronizar el token con `localStorage`.
- **`cart.svelte.ts`**: Usa `$state` para los ítems y visibilidad del carrito. `$derived` para calcular totales y `$effect.root` para persistencia.
- **`router.svelte.ts`**: Usa `$state` para la ruta actual y un `$effect.root` para escuchar el evento de cambio de hash del navegador.
- **`products.svelte.ts` y `toasts.svelte.ts`**: Usan `$state` para manejar la lista global de productos y las notificaciones en pantalla.

---

## 3. Backend y Seguridad (Endpoints Utilizados)

El frontend interactúa con una API REST alojada en Node.js/Express. La seguridad está implementada mediante **JSON Web Tokens (JWT)**, enviando un Bearer Token en la cabecera `Authorization` para proteger rutas sensibles.

### Endpoints Principales y Roles Necesarios

#### Autenticación (`/api/login`, `/api/register`)
- `POST /api/login`: **Público**. Inicia sesión y devuelve el JWT.
- `POST /api/register`: **Público**. Permite crear una nueva cuenta de usuario.

#### Gestión de Productos (`/api/productos`)
- `GET /api/productos`: **Público / Usuario**. Devuelve la lista de productos disponibles. Soporta parámetros de búsqueda.
- `POST /api/productos`: **Admin**. Crea un producto nuevo. Admite carga de imágenes mediante `multipart/form-data`.
- `PUT /api/productos/:id`: **Admin**. Actualiza la información o imagen de un producto.
- `DELETE /api/productos/:id`: **Admin**. Elimina un producto de la base de datos.

#### Gestión de Usuarios (`/api/users`)
- `GET /api/users`: **Admin**. Obtiene el listado completo de usuarios registrados.
- `PUT /api/users/:id`: **Admin**. Permite modificar un usuario (por ejemplo, promover a administrador).
- `DELETE /api/users/:id`: **Admin**. Elimina una cuenta de usuario.

#### Carrito de Compras (`/api/cart`)
- `GET /api/cart`: **Usuario (`user`)**. Obtiene los productos en el carrito del usuario logueado.
- `POST /api/cart/add`: **Usuario (`user`)**. Agrega un producto al carrito.
- `DELETE /api/cart/:productId`: **Usuario (`user`)**. Elimina un producto del carrito.
- `POST /api/cart/checkout`: **Usuario (`user`)**. Finaliza la compra y limpia el carrito del usuario.

### Resumen de Roles en la Aplicación
1. **Invitado**: Solo puede navegar por la lista de productos y acceder al login/registro.
2. **Usuario (`user`)**: Puede añadir productos al carrito y procesar la compra.
3. **Administrador (`admin`)**: Tiene acceso completo a la pestaña de administración. Puede crear, editar o eliminar productos y gestionar a otros usuarios (cambiar roles o eliminarlos).
