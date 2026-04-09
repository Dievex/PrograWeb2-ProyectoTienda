import type { Product } from '../models/product.model';

// Example mapper to separate API DTOs from frontend models
export function mapProductDtoToModel(dto: any): Product {
  return {
    _id: dto._id,
    nombre: dto.nombre,
    descripcion: dto.descripcion,
    precio: dto.precio,
    stock: dto.stock,
    activo: dto.activo,
    categoria: dto.categoria,
    imagen: dto.imagen
  };
}
