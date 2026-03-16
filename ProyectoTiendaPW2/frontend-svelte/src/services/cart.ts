import { apiFetch } from './api';
import type { Product } from './products';

export interface CartItem {
  productId: Product;
  quantity: number;
  _id: string;
}

export const cartApi = {
  async getCart(): Promise<CartItem[]> {
    return apiFetch('/cart');
  },

  async addToCart(productId: string): Promise<CartItem[]> {
    return apiFetch('/cart/add', {
      method: 'POST',
      body: JSON.stringify({ productId })
    });
  },

  async removeFromCart(productId: string): Promise<CartItem[]> {
    return apiFetch(`/cart/${productId}`, {
      method: 'DELETE'
    });
  },

  async checkout(): Promise<void> {
    return apiFetch('/cart/checkout', {
      method: 'POST'
    });
  }
};
