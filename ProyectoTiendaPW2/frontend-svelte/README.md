# Tienda Online - Frontend Svelte 5

Este es el frontend de la aplicación de Tienda Online, desarrollado con **Svelte 5** (utilizando las nuevas **Runas**) y Vite.

## Requisitos
- **Node.js** (LTS recomendado, v18 o superior)
- **NPM** o **PNPM**
- Backend en ejecución (ver configuración en el archivo `.env`)
- **Redis** (Requerido por el backend, debe estar instalado y en ejecución)

## Instalación y Ejecución

1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Configurar las variables de entorno (si aplica):
   Asegúrate de que la URL del backend apunte correctamente. Por defecto, en `src/services/api.ts` está configurado como `http://localhost:3000/api`.
3. Levantar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.
4. Construcción para producción:
   ```bash
   npm run build
   npm run preview
   ```

***

## Runas de Svelte 5 Utilizadas

El proyecto aprovecha las nuevas funcionalidades de reactividad de Svelte 5, utilizando runas (`$state`, `$derived`, `$effect`, `$props`) en lugar del antiguo sistema de reactividad basado en asignaciones (`let`, `$:`) y exportaciones (`export let`).

A continuación se detalla el uso de runas por componente y archivo:

### Componentes y Páginas (`/src/pages` y `/src/components`)

- **`src/App.svelte`**
  - `$derived`: Calcula la página actual (`CurrentPage`) de manera reactiva según el estado de autenticación y la ruta actual del enrutador.
  - `$effect`: Efecto secundario que escucha cambios de ruta y autenticación para redirigir automáticamente (ej. enviar a `/login` si no está autenticado).
- **`src/components/Navbar.svelte`**
  - `$state`: Maneja el estado local del menú móvil (`isMobileMenuOpen`).
  - `$derived.by`: Genera reactivamente los ítems de navegación según el rol del usuario (ej. muestra el link "Admin" solo si el usuario es administrador).
- **`src/components/ProductForm.svelte`**
  - `$props`: Recibe las propiedades tipadas desde el componente padre (`product`, `onsubmit`, `oncancel`).
  - `$state`: Maneja el estado local del formulario, como `currentProduct` e `imageFile`.
  - `$effect`: Sincroniza `currentProduct` cada vez que cambia la propiedad `product` recibida.
- **`src/components/ProductCard.svelte`** **y** **`src/components/UserRow.svelte`**
  - `$props`: Acceso tipado a las propiedades (`product`, `user` y funciones de callback como `onedit`, `ondelete`, `onToggleRole`).
  - `$state` (en ProductCard): Controla el estado local para expandir o contraer descripciones largas (`showFullDescription`).
- **Páginas de Formulario (`src/pages/Login.svelte`,** **`src/pages/Register.svelte`)**
  - `$state`: Controla el estado local de los campos del formulario (`username`, `password`, `confirmPassword`) y el estado de carga (`loading`).
- **Páginas de Listado (`src/pages/Admin.svelte`,** **`src/pages/Products.svelte`)**
  - `$state`: Almacena el listado de elementos (`users`, `searchQuery`, `isModalOpen`), y controla la interfaz de carga (`loading`).
  - `$derived` (en Products): Filtra reactivamente la lista de productos (`filteredProducts`) en base al término de búsqueda (`searchQuery`).

### Tiendas (Stores Reactivas en `/src/stores`)

Svelte 5 permite usar runas fuera de los archivos `.svelte` utilizando archivos `.svelte.ts`.

- **`auth.svelte.ts`**
  - `$state`: Maneja el `token` y la información del `user`.
  - `$effect.root` / `$effect`: Escucha los cambios en el token para sincronizarlo automáticamente con el `localStorage`.
- **`cart.svelte.ts`**
  - `$state`: Gestiona los `items` del carrito, si está abierto (`isOpen`) y si está cargando (`loading`).
  - `$derived`: Calcula el total de ítems (`totalItems`) y el precio total (`totalPrice`).
  - `$effect.root` / `$effect`: Guarda reactivamente el estado del carrito en `localStorage`.
- **`router.svelte.ts`**
  - `$state`: Almacena la ruta actual (`currentPath`).
  - `$effect.root`: Se suscribe a los eventos `hashchange` del navegador para mantener la ruta sincronizada.
- **`products.svelte.ts`** **y** **`toasts.svelte.ts`**
  - `$state`: Manejan el array global de productos y las notificaciones emergentes (toasts).

***

## Backend y Seguridad (Endpoints Utilizados)

El frontend se comunica con una API REST (Backend). La seguridad está implementada mediante **Bearer JWT** (JSON Web Tokens), los cuales se envían en la cabecera `Authorization` de cada petición privada.

### Endpoints Principales

#### 1. Autenticación (`/authRoutes.js`)

- `POST /api/login` — **Público**. Inicia sesión y devuelve un token JWT.
- `POST /api/register` — **Público**. Registra un nuevo usuario en el sistema.

#### 2. Gestión de Usuarios (`/userRoutes.js`)

- `GET /api/users` — **Admin**. Obtiene la lista de todos los usuarios registrados.
- `PUT /api/users/:id` — **Admin**. Actualiza la información y el rol (user/admin) de un usuario.
- `DELETE /api/users/:id` — **Admin**. Elimina a un usuario.

#### 3. Gestión de Productos (`/productRoutes.js`)

- `GET /api/productos` — **Público/User**. Obtiene la lista de todos los productos (soporta filtros por nombre).
- `POST /api/productos` — **Admin**. Crea un nuevo producto (soporta subida de imágenes con `multipart/form-data`).
- `PUT /api/productos/:id` — **Admin**. Modifica un producto existente.
- `DELETE /api/productos/:id` — **Admin**. Elimina un producto.

#### 4. Carrito de Compras (`/cartRoutes.js`)

- `GET /api/cart` — **User**. Obtiene el carrito del usuario autenticado.
- `POST /api/cart/add` — **User**. Añade un producto al carrito.
- `DELETE /api/cart/:productId` — **User**. Elimina un producto específico del carrito.
- `POST /api/cart/checkout` — **User**. Finaliza la compra y vacía el carrito.

### Roles y Permisos en la Aplicación

- **Invitado**: Puede ver la lista de productos e iniciar sesión/registrarse.
- **Usuario (`user`)**: Puede añadir productos a su carrito, visualizar su carrito y hacer checkout.
- **Administrador (`admin`)**: Además de lo anterior, tiene acceso a la vista de "Admin" y a la gestión completa (CRUD) de Productos y Usuarios.

