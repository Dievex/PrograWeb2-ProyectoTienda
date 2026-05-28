from fastapi import APIRouter, Depends, status, Form, UploadFile, File
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.product_schema import ProductCreate, ProductUpdate, ProductResponse
from app.repositories.product_repository import ProductRepository
from app.services.product_service import ProductService
from app.models.user_model import UserModel
from app.dependencies.auth import get_current_user
from app.dependencies.roles import require_admin

import os
import shutil
from datetime import datetime

router = APIRouter(prefix="/productos", tags=["products"])

def get_product_service(db: Session = Depends(get_db)) -> ProductService:
    product_repo = ProductRepository(db)
    return ProductService(product_repo)

@router.get("", response_model=list[ProductResponse])
def get_products(
    product_service: ProductService = Depends(get_product_service)
):
    return product_service.get_all_products()

@router.get("/{product_id}", response_model=ProductResponse)
def get_product(
    product_id: int,
    product_service: ProductService = Depends(get_product_service)
):
    return product_service.get_product_by_id(product_id)

def save_upload_file(upload_file: UploadFile) -> str | None:
    if not upload_file or not upload_file.filename:
        return None
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    file_extension = os.path.splitext(upload_file.filename)[1]
    filename = f"{timestamp}{file_extension}"
    file_path = os.path.join("uploads", filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(upload_file.file, buffer)
    return filename

@router.post("", response_model=ProductResponse, status_code=status.HTTP_201_CREATED)
def create_product(
    nombre: str = Form(...),
    descripcion: str | None = Form(None),
    precio: float = Form(...),
    stock: int = Form(0),
    categoria: str | None = Form(None),
    activo: bool = Form(True),
    imagen: UploadFile | None = File(None),
    product_service: ProductService = Depends(get_product_service),
    current_user: UserModel = Depends(require_admin)
):
    imagen_str = save_upload_file(imagen)
    
    product_data = ProductCreate(
        nombre=nombre,
        descripcion=descripcion,
        precio=precio,
        stock=stock,
        categoria=categoria,
        activo=activo,
        imagen=imagen_str
    )
    return product_service.create_product(product_data)

@router.put("/{product_id}", response_model=ProductResponse)
def update_product(
    product_id: int,
    nombre: str | None = Form(None),
    descripcion: str | None = Form(None),
    precio: float | None = Form(None),
    stock: int | None = Form(None),
    categoria: str | None = Form(None),
    activo: bool | None = Form(None),
    imagen: UploadFile | None = File(None),
    product_service: ProductService = Depends(get_product_service),
    current_user: UserModel = Depends(require_admin)
):
    imagen_str = save_upload_file(imagen)
    
    product_data_dict = {
        "nombre": nombre,
        "descripcion": descripcion,
        "precio": precio,
        "stock": stock,
        "categoria": categoria,
        "activo": activo
    }
    
    product_data_dict = {k: v for k, v in product_data_dict.items() if v is not None}
    
    if imagen_str:
        product_data_dict["imagen"] = imagen_str
        
    product_data = ProductUpdate(**product_data_dict)
    return product_service.update_product(product_id, product_data)

@router.delete("/{product_id}", status_code=status.HTTP_200_OK)
def delete_product(
    product_id: int,
    product_service: ProductService = Depends(get_product_service),
    current_user: UserModel = Depends(require_admin)
):
    product_service.delete_product(product_id)
    return {"message": "Producto eliminado exitosamente"}
