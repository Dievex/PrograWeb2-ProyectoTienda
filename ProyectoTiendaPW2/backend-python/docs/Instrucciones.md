# Práctica 2 — Backend Python con arquitectura limpia e IA

## Contexto

El objetivo es crear un **nuevo backend en Python** (`backend-python/`) que sustituya funcionalmente al backend original, sin eliminarlo. El frontend en Svelte 5 debe conectarse al nuevo backend sin requerir cambios importantes en su lógica ni en el consumo de API.

El backend cubre dos recursos principales:

- **Productos** — CRUD completo, protegido por roles
- **Usuarios** — CRUD completo, con roles `user` / `admin`

***

## Estructura de carpetas del repositorio

El backend original **no se toca**. Se crea una carpeta nueva al mismo nivel:

```text
/
├── frontend/              # Frontend original, no modificar
├── frontend-svelte/       # Svelte 5, no modificar
├── backend/               # Backend original, no modificar
└── backend-python/        # Nuevo backend en Python ← aquí trabajas
```

***

## Estructura interna de `backend-python/`

```text
backend-python/
├── app/
│   ├── main.py
│   ├── core/
│   │   ├── config.py          # Variables de entorno y configuración
│   │   ├── security.py        # Generación y validación de JWT, hash de contraseñas
│   │   ├── exceptions.py      # Excepciones de dominio personalizadas
│   │   └── handlers.py        # Manejador global de excepciones → respuestas HTTP
│   ├── db/
│   │   ├── base.py            # Declarative base de SQLAlchemy
│   │   ├── session.py         # Configuración de sesión y engine
│   │   └── init_db.py         # Inicialización de tablas y datos semilla
│   ├── models/
│   │   ├── user_model.py      # Modelo ORM de usuario
│   │   └── product_model.py   # Modelo ORM de producto
│   ├── schemas/
│   │   ├── auth_schema.py     # LoginRequest, TokenResponse
│   │   ├── user_schema.py     # UserCreate, UserUpdate, UserResponse
│   │   └── product_schema.py  # ProductCreate, ProductUpdate, ProductResponse
│   ├── repositories/
│   │   ├── user_repository.py     # CRUD de usuario contra la base de datos
│   │   └── product_repository.py  # CRUD de producto contra la base de datos
│   ├── services/
│   │   ├── auth_service.py        # Lógica de login y verificación de credenciales
│   │   ├── user_service.py        # Lógica de negocio de usuarios
│   │   └── product_service.py     # Lógica de negocio de productos
│   ├── dependencies/
│   │   ├── auth.py            # Extrae y valida el token JWT de la petición
│   │   └── roles.py           # Verifica que el usuario tiene el rol requerido
│   └── routers/
│       ├── auth_router.py     # POST /login
│       ├── users_router.py    # CRUD /users
│       └── products_router.py # CRUD /products
├── .env                   # Variables de entorno (no subir a git)
├── .env.example           # Plantilla de variables de entorno
├── requirements.txt
└── README.md
```

### Responsabilidad de cada capa

- **routers** — reciben la petición HTTP, leen parámetros, llaman al servicio y devuelven la respuesta. No contienen lógica de negocio.
- **services** — aplican reglas de negocio, comprueban permisos, coordinan repositorios. No acceden directamente a la base de datos.
- **repositories** — ejecutan las operaciones de base de datos mediante ORM. Aíslan completamente SQLAlchemy del resto del sistema.
- **schemas** — definen los contratos de entrada y salida con Pydantic. Aquí viven todas las validaciones.
- **models** — representan las tablas de la base de datos como clases ORM.
- **core** — utilidades transversales: configuración, JWT, hash de contraseñas, excepciones personalizadas y su mapeo a HTTP.
- **dependencies** — funciones de FastAPI que comprueban el token y el rol antes de entrar al handler.

***

## Stack tecnológico

- **Framework:** FastAPI
- **ORM:** SQLAlchemy o SQLModel
- **Base de datos:** SQLite (archivo local, sin configuración extra)
- **Validación:** Pydantic v2 (integrado en FastAPI)
- **Autenticación:** JWT con `python-jose` o `PyJWT`
- **Hash de contraseñas:** `passlib[bcrypt]`
- **Variables de entorno:** `python-dotenv`

### `requirements.txt` mínimo

```text
fastapi
uvicorn[standard]
sqlalchemy
pydantic[email]
python-jose[cryptography]
passlib[bcrypt]
python-dotenv
```

***

## Base de datos

Usa **SQLite** con SQLAlchemy. Está prohibido usar arrays en memoria, ficheros JSON o texto plano como persistencia.

### Modelo de usuario

Campos mínimos:

- `id` — entero, clave primaria, autoincremental
- `name` — cadena, obligatorio
- `password` — cadena hasheada, nunca en texto plano
- `role` — cadena, valores permitidos: `user` o `admin`
- `created_at` — timestamp automático

### Modelo de producto

Campos mínimos:

- `id` — entero, clave primaria, autoincremental
- `name` — cadena, obligatorio
- `description` — cadena, opcional
- `price` — float, obligatorio, no negativo
- `stock` — entero, no negativo
- `created_at` — timestamp automático

> Adapta los campos exactamente a lo que ya espera el frontend Svelte 5.

***

## Autenticación con JWT

### Login

- Endpoint: `POST /login`
- Body: `{ "email": "...", "password": "..." }`
- Respuesta: `{ "token": "...", "user": { ... } }` — debe coincidir exactamente con lo que espera el frontend

### Protección de rutas

- El token viaja en la cabecera `Authorization: Bearer <token>`
- La dependencia `get_current_user` en `dependencies/auth.py` extrae y valida el token
- La dependencia `require_admin` en `dependencies/roles.py` comprueba que el rol sea `admin`
- Las rutas privadas declaran estas dependencias, no duplican la lógica internamente

### Respuestas de error de autenticación

- `401 Unauthorized` — token ausente, inválido o expirado
- `403 Forbidden` — usuario autenticado pero sin permisos suficientes

***

## Endpoints a exponer

El backend nuevo debe exponer **exactamente los mismos endpoints** que el backend original en cuanto a URL y método HTTP. Comprueba el código del frontend para confirmar la lista completa.

### Autenticación

| Método | URL      | Auth | Descripción |
| ------ | -------- | ---- | ----------- |
| POST   | `/login` | No   | Obtener JWT |

### Usuarios

| Método | URL           | Auth | Rol mínimo | Descripción     |
| ------ | ------------- | ---- | ---------- | --------------- |
| GET    | `/users`      | Sí   | admin      | Listar usuarios |
| GET    | `/users/{id}` | Sí   | admin      | Obtener usuario |
| POST   | `/users`      | Sí   | admin      | Crear usuario   |
| PUT    | `/users/{id}` | Sí   | admin      | Editar usuario  |
| DELETE | `/users/{id}` | Sí   | admin      | Borrar usuario  |

### Productos

| Método | URL              | Auth | Rol mínimo | Descripción      |
| ------ | ---------------- | ---- | ---------- | ---------------- |
| GET    | `/products`      | Sí   | user       | Listar productos |
| GET    | `/products/{id}` | Sí   | user       | Obtener producto |
| POST   | `/products`      | Sí   | admin      | Crear producto   |
| PUT    | `/products/{id}` | Sí   | admin      | Editar producto  |
| DELETE | `/products/{id}` | Sí   | admin      | Borrar producto  |

> **Importante:** ajusta las URLs y métodos a los que realmente usa el frontend. Cualquier diferencia puede romper la integración sin cambios en Svelte.

***

## Contratos JSON

Antes de programar:

1. Abre el código del frontend y localiza todos los `fetch` o llamadas equivalentes.
2. Anota qué URL llaman, qué método usan, qué body envían y qué respuesta esperan.
3. Diseña tus schemas Pydantic para que respondan exactamente con esos campos y tipos.
4. No cambies nombres de campos JSON sin necesidad.

***

## Validación de datos de entrada

Usa **Pydantic** para definir un schema por cada operación de creación y edición.

### Schemas de usuario

```python
class UserCreate(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    password: str = Field(min_length=8)
    role: Literal["user", "admin"] = "user"

class UserUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=2, max_length=100)
    password: str | None = Field(default=None, min_length=8)
    role: Literal["user", "admin"] | None = None

class UserResponse(BaseModel):
    id: int
    name: str
    role: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
```

### Schemas de producto

```python
class ProductCreate(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    description: str | None = Field(default=None, max_length=1000)
    price: float = Field(gt=0)
    stock: int = Field(ge=0)

class ProductUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=200)
    description: str | None = None
    price: float | None = Field(default=None, gt=0)
    stock: int | None = Field(default=None, ge=0)

class ProductResponse(BaseModel):
    id: int
    name: str
    description: str | None
    price: float
    stock: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
```

### Schemas de autenticación

```python
class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1)

class TokenResponse(BaseModel):
    token: str
    user: UserResponse
```

Cuando los datos no cumplan el schema, FastAPI devuelve automáticamente un `422 Unprocessable Entity` con el detalle del error.

***

## Manejo global de excepciones

No uses `try/except` sueltos en cada endpoint.

### 1. Definir excepciones de dominio en `core/exceptions.py`

```python
class NotFoundError(Exception):
    def __init__(self, message: str = "Recurso no encontrado"):
        self.message = message

class UnauthorizedError(Exception):
    def __init__(self, message: str = "No autorizado"):
        self.message = message

class ForbiddenError(Exception):
    def __init__(self, message: str = "Acceso denegado"):
        self.message = message

class ConflictError(Exception):
    def __init__(self, message: str = "Conflicto con el estado actual"):
        self.message = message

class BusinessRuleError(Exception):
    def __init__(self, message: str = "Regla de negocio incumplida"):
        self.message = message
```

### 2. Registrar manejadores globales en `core/handlers.py`

```python
from fastapi import Request
from fastapi.responses import JSONResponse
from app.core.exceptions import (
    NotFoundError, UnauthorizedError,
    ForbiddenError, ConflictError, BusinessRuleError
)

def register_exception_handlers(app):
    @app.exception_handler(NotFoundError)
    async def not_found_handler(request: Request, exc: NotFoundError):
        return JSONResponse(status_code=404, content={"detail": exc.message})

    @app.exception_handler(UnauthorizedError)
    async def unauthorized_handler(request: Request, exc: UnauthorizedError):
        return JSONResponse(status_code=401, content={"detail": exc.message})

    @app.exception_handler(ForbiddenError)
    async def forbidden_handler(request: Request, exc: ForbiddenError):
        return JSONResponse(status_code=403, content={"detail": exc.message})

    @app.exception_handler(ConflictError)
    async def conflict_handler(request: Request, exc: ConflictError):
        return JSONResponse(status_code=409, content={"detail": exc.message})

    @app.exception_handler(BusinessRuleError)
    async def business_rule_handler(request: Request, exc: BusinessRuleError):
        return JSONResponse(status_code=400, content={"detail": exc.message})
```

### 3. Registrarlos en `main.py`

```python
from fastapi import FastAPI
from app.core.handlers import register_exception_handlers

app = FastAPI()
register_exception_handlers(app)
```

Los servicios lanzan estas excepciones. Los routers nunca capturan excepciones directamente.

***

## Patrón repositorio

Los repositorios son la única capa que toca SQLAlchemy.

### Estructura de `UserRepository`

```python
from sqlalchemy.orm import Session
from app.models.user_model import UserModel

class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self) -> list[UserModel]:
        return self.db.query(UserModel).all()

    def get_by_id(self, user_id: int) -> UserModel | None:
        return self.db.query(UserModel).filter(UserModel.id == user_id).first()

    def get_by_email(self, email: str) -> UserModel | None:
        return self.db.query(UserModel).filter(UserModel.email == email).first()

    def create(self, data: dict) -> UserModel:
        user = UserModel(**data)
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

    def update(self, user_id: int, data: dict) -> UserModel | None:
        user = self.get_by_id(user_id)
        if not user:
            return None
        for key, value in data.items():
            setattr(user, key, value)
        self.db.commit()
        self.db.refresh(user)
        return user

    def delete(self, user_id: int) -> bool:
        user = self.get_by_id(user_id)
        if not user:
            return False
        self.db.delete(user)
        self.db.commit()
        return True
```

### Inyección de la sesión de base de datos

```python
# db/session.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

engine = create_engine(settings.DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

***

## Variables de entorno

### `.env.example`

```env
DATABASE_URL=sqlite:///./app.db
SECRET_KEY=cambia_esto_por_un_secreto_largo_y_aleatorio
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

Crea `.env` copiando este archivo y añade `.env` al `.gitignore`.

### `core/config.py`

```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    class Config:
        env_file = ".env"

settings = Settings()
```

***

## Instrucciones de instalación y ejecución

```bash
# 1. Entrar en la carpeta
cd backend-python

# 2. Crear entorno virtual
python -m venv venv
source venv/bin/activate        # Linux/Mac
venv\Scripts\activate           # Windows

# 3. Instalar dependencias
pip install -r requirements.txt

# 4. Configurar variables de entorno
cp .env.example .env
# Editar .env con los valores correctos

# 5. Inicializar la base de datos
python -m app.db.init_db

# 6. Arrancar el servidor
uvicorn app.main:app --reload --port 3000
```

> El puerto debe coincidir con el que espera el frontend. Comprueba la URL base que usa Svelte 5.

***

## Compatibilidad con el frontend: lista de comprobación antes de empezar

- [ ] ¿Cuál es la URL base que usa el frontend para conectarse al backend?
- [ ] ¿Qué campos exactos espera recibir en la respuesta de login?
- [ ] ¿Cómo envía el token en peticiones posteriores?
- [ ] ¿Qué campos espera en cada objeto `Product`?
- [ ] ¿Qué campos espera en cada objeto `User`?
- [ ] ¿Qué hace el frontend cuando recibe un 401?
- [ ] ¿Qué hace el frontend cuando recibe un 403?
- [ ] ¿Hay paginación en los listados?
- [ ] ¿Hay algún endpoint adicional que no sea CRUD puro (ej. `/me`, `/search`)?

***

## Reglas que no se pueden incumplir

- No eliminar ni modificar la carpeta `backend/` original.
- No centralizar lógica en `main.py` ni en los routers.
- No usar arrays en memoria, ficheros JSON ni texto plano como persistencia.
- No devolver la contraseña hasheada en ninguna respuesta de la API.
- No almacenar contraseñas en texto plano en la base de datos.
- Mantener el mismo contrato de API que usa el frontend.

