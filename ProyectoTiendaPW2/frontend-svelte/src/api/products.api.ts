import { apiFetch } from './client';
import type { Product } from '../models/product.model';

export const productsApi = {
  async getAll(): Promise<Product[]> {
    return apiFetch('/productos');
  },
  
  async getById(id: string): Promise<Product> {
    return apiFetch(`/productos/${id}`);
  },
  
  async create(data: FormData): Promise<Product> {
    return apiFetch('/productos', {
      method: 'POST',
      body: data,
      headers: {} // Let browser set content-type for FormData
    });
  },
  
  async update(id: string, data: FormData): Promise<Product> {
    return apiFetch(`/productos/${id}`, {
      method: 'PUT',
      body: data,
      headers: {} // Let browser set content-type for FormData
    });
  },
  
  async delete(id: string): Promise<void> {
    return apiFetch(`/productos/${id}`, {
      method: 'DELETE'
    });
  }
};
