# Memoria del uso de IA — Práctica 2

## Objetivo del uso de IA

El uso de la IA en este proyecto ha sido para implementar de manera estructurada y eficiente un nuevo backend en Python (FastAPI + SQLAlchemy) aplicando los principios de Clean Architecture. El objetivo principal ha sido asegurar que el nuevo backend sea completamente compatible con el frontend existente (Svelte 5) sin modificar el código original del frontend, manteniendo los mismos contratos JSON y los endpoints requeridos.

## Prompts utilizados

### Prompt 1 — Comprensión de reglas y estructuración del proyecto

**Prompt inicial:**

> \[El usuario proporcionó un archivo de instrucciones completo y pidió: "Quiero ampliar el proyecto actual creando un nuevo backend en Python. Para ello te he adjuntado un archivo de "Instrucciones" que debes seguir estrictamente y en su totalidad... Empieza resumiendo lo que vas a hacer y espera mi confirmación antes de generar el primer archivo."]

**Problema detectado:**
Ninguno en el entendimiento inicial, pero fue crucial identificar que se requería una estricta separación de capas (routers sin lógica, repositorios aislados para la base de datos) y que estaba prohibido usar persistencia en memoria o JSON, requiriendo en su lugar SQLite.

**Prompt refinado:**

> (No fue necesario un refinamiento explícito del usuario, pero el modelo dividió internamente la ejecución en 5 fases lógicas para asegurar la correcta implementación y obtener confirmación paso a paso).

**Resultado final y decisión adoptada:**
Se adoptó un flujo de trabajo por fases (1: BD y Modelos, 2: Schemas y Repositorios, 3: Seguridad y Servicios, 4: Routers, 5: Documentación). Esto garantizó que cada componente respetara su responsabilidad antes de conectarse con el siguiente.

***

### Prompt 2 — Implementación de la capa de acceso a datos y contratos

**Prompt inicial:**

> \[El usuario aprobó continuar a la fase 2 tras la configuración de base de datos] "avanzamos a la fase 2"

**Problema detectado:**
Garantizar que Pydantic estuviera configurado para devolver los datos exactamente como el frontend los espera (ej. incluir el `id`, el `created_at`, y tener compatibilidad con el ORM a través de `from_attributes=True`).

**Prompt refinado:**

> (Aplica las configuraciones requeridas por pydantic v2 basadas en las instrucciones).

**Resultado final y decisión adoptada:**
Se crearon `UserResponse`, `ProductResponse` y los esquemas de creación/actualización con validaciones estrictas (`Field(min_length=...)`). Se implementaron `UserRepository` y `ProductRepository` encapsulando todo el uso de `Session` de SQLAlchemy.

***

### Prompt 3 — Seguridad y Lógica de Negocio

**Prompt inicial:**

> "adelante" (Aprobación para la fase 3)

**Resultado final y decisión adoptada:**
Se crearon las funciones `get_current_user` y `require_admin` en `app/dependencies`. Los servicios `UserService` y `ProductService` se encargaron de lanzar las excepciones de dominio (como `ConflictError` si el email ya existe) en lugar de retornar errores HTTP directamente.

***

### Prompt 4 — Implementación omitida de funcionalidad (Carrito de Compras)

**Prompt inicial:**

> "La funcionalidad del carrito no esta implementada, en el alcance inicial de las instrucciones se me olvido mencionarlo, quiero que la implementes en el nuevo back"

**Problema detectado:**
Las instrucciones originales especificaban los recursos de `Usuarios` y `Productos`, pero no mencionaban el recurso del `Carrito de Compras` (`cart`), el cual sí era utilizado por el frontend (Svelte) y formaba parte del backend original en Node.js. Como la instrucción dictaba no apartarse del documento, esta funcionalidad quedó inicialmente fuera del alcance.

**Resultado final y decisión adoptada:**
Se implementó de manera completa la funcionalidad del carrito respetando la Clean Architecture:

1. Se creó el modelo `CartItemModel` con relación `user_id` y `product_id`.
2. Se definió `CartRepository` para manejar la persistencia (CRUD del carrito).
3. Se creó `CartService` para la lógica de negocio (añadir, remover y hacer *checkout* verificando y restando stock).
4. Se expuso `cart_router.py` con los endpoints `/api/cart`, `/api/cart/add`, `/api/cart/{product_id}` y `/api/cart/checkout`, integrándolos en `main.py`.

***

### Prompt 5 — Error al degradar el rol de un administrador

**Prompt inicial:**

> "He encontrado otro error y es el siguiente: un usuario admin no deja cambiarle el rol a otro usuario admin, he visto que el front manda el valor como "Usuario", pero en el esquema esta puesto como "user"

**Problema detectado:**
El frontend (Svelte) enviaba el valor `"usuario"` en el payload del JSON cuando un administrador intentaba degradar a otro administrador. Sin embargo, el esquema `UserUpdate` en Pydantic (`backend-python/app/schemas/user_schema.py`) estaba estrictamente tipado como `Literal["user", "admin"]`. Al recibir `"usuario"`, Pydantic rechazaba la petición automáticamente con un error HTTP 422 (Unprocessable Entity).

**Resultado final y decisión adoptada:**
Se modificó el endpoint `PUT /api/users/{user_id}/role` en `users_router.py` para interceptar el valor enviado por el frontend. Si el valor de `rol` recibido es `"usuario"`, el backend lo traduce internamente a `"user"` antes de pasarlo al esquema `UserUpdate`. De este modo, se mantiene la compatibilidad exacta con el frontend sin alterar la integridad de los datos en la base de datos ni los tipos estrictos de Pydantic.

***

### Prompt 6 — Error en la carga de imágenes

**Prompt inicial:**

> "He encontrado otro error y es el siguiente: las imagenes de los productos no cargan, no hay una ruta donde guardarlas, antiguamente había una carpeta "uploads" que actualmente ya no está"

**Problema detectado:**
Las imágenes que se adjuntaban al crear o editar un producto no se mostraban en el frontend. Esto se debía a que el backend en Python no guardaba el archivo físicamente en disco y tampoco servía el directorio estático para acceder a él, a diferencia de la implementación original en Node.js, donde sí existía y se exponía la carpeta `uploads`.

**Resultado final y decisión adoptada:**
Se resolvieron ambas carencias:

1. Se montó la ruta estática `/uploads` usando `StaticFiles` en `app/main.py`.
2. Se implementó la lógica en `products_router.py` (función `save_upload_file`) para recibir el archivo, renombrarlo usando un timestamp para evitar colisiones y escribirlo físicamente en el disco dentro de la carpeta `uploads/`.
3. Se actualizó el PUT de productos para mantener la imagen anterior si no se enviaba una nueva.

***

### Prompt 7 — Error de JSON al eliminar recursos

**Prompt inicial:**

> "Los endpoints DELETE /api/productos/{id} y DELETE /api/users/{id} del backend en FastAPI devuelven 204 No Content con body vacío. El frontend en client.ts llama automáticamente a response.json() sobre todas las respuestas, lo que lanza Unexpected end of JSON input y no actualiza la vista."

**Problema detectado:**
El frontend (Svelte) enviaba una petición `DELETE` y automáticamente llamaba a `response.json()` sobre la respuesta en su archivo `client.ts`. Sin embargo, los endpoints de eliminación (`DELETE /api/productos/{id}` y `DELETE /api/users/{id}`) en el backend de Python estaban configurados para retornar el código `204 No Content` sin cuerpo (body vacío), lo cual es el estándar para respuestas exitosas sin contenido. Al intentar parsear un cuerpo vacío como JSON, el navegador lanzaba un error `Unexpected end of JSON input`. Esto provocaba que el frontend atrapara la excepción, mostrara el mensaje de error y no actualizara el estado local (no quitaba el producto de la vista hasta recargar la página), a pesar de que en la base de datos sí se había eliminado.

**Resultado final y decisión adoptada:**
Para mantener la regla estricta de "no tocar el código del frontend", se modificaron los routers del backend (`products_router.py` y `users_router.py`). Se cambió el código de estado de `204 No Content` a `200 OK` y se hizo que los endpoints devolvieran un pequeño JSON válido `{"message": "Producto/Usuario eliminado exitosamente"}`. De esta manera, `response.json()` en el frontend se ejecuta sin problemas, la petición finaliza con éxito y Svelte actualiza la UI automáticamente al borrar.

## Error o alucinación detectada

**Descripción del error:**
Durante la prueba de integración con el frontend (Svelte 5), se detectó una discrepancia crítica entre los campos requeridos por las instrucciones originales y los que realmente consumía el frontend.

1. El frontend esperaba que los endpoints estuvieran agrupados bajo el prefijo `/api` (ej. `/api/productos`, `/api/login`).
2. Esperaba consumir nombres de campos en español (`nombre`, `descripcion`, `precio`, `stock`, `categoria`, `imagen`) en lugar de inglés, y requería `username` en lugar de `email`.
3. El frontend enviaba imágenes como `multipart/form-data` en la creación y actualización de productos, lo cual no estaba contemplado inicialmente.
4. El frontend esperaba que el ID de la base de datos se llamara `_id` en las respuestas JSON (debido a su herencia de MongoDB).

**Por qué era un problema:**
Si no se corregían estas discrepancias, el frontend habría fallado con errores 404 (rutas no encontradas) o 422 Unprocessable Entity (errores de validación de Pydantic por campos faltantes o tipos incorrectos), rompiendo completamente la compatibilidad entre ambos sistemas.

**Cómo se corrigió:**

1. Se añadió un `APIRouter` en `main.py` con el prefijo `/api` para agrupar todas las rutas.
2. Se actualizaron los nombres de las rutas (`/productos` en lugar de `/products`) y los campos de los esquemas Pydantic (`product_schema.py` y `user_schema.py`) para coincidir exactamente con lo que el frontend enviaba.
3. Se instaló `python-multipart` y se modificó `products_router.py` para usar `Form(...)` y `UploadFile` de FastAPI, permitiendo procesar el envío de `FormData`.
4. Se configuró `Field(serialization_alias="_id")` y `populate_by_name=True` en las respuestas de Pydantic para mapear internamente la columna `id` de SQLite al campo `_id` esperado por el JSON.

