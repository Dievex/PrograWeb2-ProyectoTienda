from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.core.handlers import register_exception_handlers
from app.routers import auth_router, users_router, products_router, cart_router
import os

app = FastAPI(title="Proyecto Tienda API", version="1.0.0")

os.makedirs("uploads", exist_ok=True)

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

register_exception_handlers(app)

api_router = APIRouter(prefix="/api")
api_router.include_router(auth_router.router)
api_router.include_router(users_router.router)
api_router.include_router(products_router.router)
api_router.include_router(cart_router.router)

app.include_router(api_router)

@app.get("/")
def read_root():
    return {"message": "Bienvenido al Backend Python de Proyecto Tienda"}
