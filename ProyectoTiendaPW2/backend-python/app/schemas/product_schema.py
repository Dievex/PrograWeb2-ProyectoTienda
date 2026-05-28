from pydantic import BaseModel, Field, ConfigDict
from datetime import datetime

class ProductCreate(BaseModel):
    nombre: str = Field(min_length=1, max_length=200)
    descripcion: str | None = Field(default=None, max_length=1000)
    precio: float = Field(gt=0)
    stock: int = Field(ge=0)
    categoria: str | None = None
    activo: bool | str = True
    imagen: str | None = None

class ProductUpdate(BaseModel):
    nombre: str | None = Field(default=None, min_length=1, max_length=200)
    descripcion: str | None = None
    precio: float | None = Field(default=None, gt=0)
    stock: int | None = Field(default=None, ge=0)
    categoria: str | None = None
    activo: bool | str | None = None
    imagen: str | None = None

class ProductResponse(BaseModel):
    id: int = Field(serialization_alias="_id")
    nombre: str
    descripcion: str | None
    precio: float
    stock: int
    categoria: str | None
    activo: bool
    imagen: str | None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)
