import type { Product } from './product.model';

export interface CartItem {
  productId: Product;
  quantity: number;
  _id: string;
}
