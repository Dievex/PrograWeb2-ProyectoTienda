# Backend Python

Este es el backend reescrito en Python utilizando FastAPI, SQLAlchemy y arquitectura limpia, que reemplaza funcionalmente al backend original en Node.js, para interactuar con el frontend en Svelte 5.

## Requisitos

- Python 3.10+
- Entorno virtual recomendado

## Instrucciones de instalación y ejecución

1. Entrar en la carpeta:
```bash
cd backend-python
```

2. Crear entorno virtual y activarlo:
```bash
python -m venv venv
source venv/bin/activate        # Linux/Mac
venv\Scripts\activate           # Windows
```

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

4. Configurar variables de entorno:
```bash
cp .env.example .env
```
Edita `.env` con los valores correctos si es necesario.

5. Inicializar la base de datos (crea tablas y usuario admin por defecto):
```bash
python -m app.db.init_db
```

6. Arrancar el servidor:
```bash
uvicorn app.main:app --reload --port 3000
```
El servidor arrancará en el puerto **3000** (para ser compatible con el frontend Svelte 5).

## Endpoints Principales y Roles

### Autenticación
- `POST /api/login` (Público): Inicia sesión y devuelve JWT.
- `POST /api/register` (Público): Permite crear una nueva cuenta.
- `GET /api/profile` (user/admin): Obtiene perfil del usuario actual.

### Usuarios
- `GET /api/users` (admin): Obtiene listado de usuarios.
- `GET /api/users/{id}` (admin): Obtiene detalles de un usuario.
- `POST /api/users` (admin): Crea un nuevo usuario.
- `PUT /api/users/{id}` (admin): Actualiza información de un usuario.
- `PUT /api/users/{id}/role` (admin): Actualiza el rol de un usuario.
- `DELETE /api/users/{id}` (admin): Elimina un usuario.

### Productos
- `GET /api/productos` (user/admin): Obtiene la lista de productos.
- `GET /api/productos/{id}` (user/admin): Obtiene detalles de un producto.
- `POST /api/productos` (admin): Crea un producto nuevo (multipart/form-data).
- `PUT /api/productos/{id}` (admin): Actualiza un producto existente.
- `DELETE /api/productos/{id}` (admin): Elimina un producto.
