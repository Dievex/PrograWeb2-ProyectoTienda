from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean
from sqlalchemy.sql import func
from app.db.base import Base

class ProductModel(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nombre = Column(String, nullable=False)
    descripcion = Column(String, nullable=True)
    precio = Column(Float, nullable=False)
    stock = Column(Integer, nullable=False, default=0)
    categoria = Column(String, nullable=True)
    activo = Column(Boolean, nullable=False, default=True)
    imagen = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
