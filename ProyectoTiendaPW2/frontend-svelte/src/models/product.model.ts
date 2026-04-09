export interface Product {
  _id: string;
  nombre: string;
  descripcion?: string;
  precio: number;
  stock?: number;
  activo?: boolean;
  categoria?: string;
  imagen?: string;
}
