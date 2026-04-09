import { cartApi } from '../api/cart.api';
import type { CartItem } from '../models/cart.model';
import { mapCartItemDtoToModel } from '../mappers/cart.mapper';

export const CartService = {
  async getCart(): Promise<CartItem[]> {
    const rawCart = await cartApi.getCart();
    return rawCart.map(mapCartItemDtoToModel);
  },

  async addToCart(productId: string): Promise<CartItem[]> {
    const rawCart = await cartApi.addToCart(productId);
    return rawCart.map(mapCartItemDtoToModel);
  },

  async removeFromCart(productId: string): Promise<CartItem[]> {
    const rawCart = await cartApi.removeFromCart(productId);
    return rawCart.map(mapCartItemDtoToModel);
  },

  async checkout(): Promise<void> {
    return cartApi.checkout();
  }
};
