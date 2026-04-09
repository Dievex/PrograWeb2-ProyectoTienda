import { productsApi } from '../api/products.api';
import type { Product } from '../models/product.model';
import { mapProductDtoToModel } from '../mappers/product.mapper';

export const ProductService = {
  async getAllProducts(): Promise<Product[]> {
    const rawProducts = await productsApi.getAll();
    return rawProducts.map(mapProductDtoToModel);
  },
  
  async getProductById(id: string): Promise<Product> {
    const raw = await productsApi.getById(id);
    return mapProductDtoToModel(raw);
  },
  
  async createProduct(data: FormData): Promise<Product> {
    const raw = await productsApi.create(data);
    return mapProductDtoToModel(raw);
  },
  
  async updateProduct(id: string, data: FormData): Promise<Product> {
    const raw = await productsApi.update(id, data);
    return mapProductDtoToModel(raw);
  },
  
  async deleteProduct(id: string): Promise<void> {
    return productsApi.delete(id);
  }
};
