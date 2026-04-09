import { apiFetch } from './client';
import type { CartItem } from '../models/cart.model';

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
