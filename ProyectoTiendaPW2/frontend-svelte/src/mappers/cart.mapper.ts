import type { CartItem } from '../models/cart.model';
import { mapProductDtoToModel } from './product.mapper';

export function mapCartItemDtoToModel(dto: any): CartItem {
  return {
    _id: dto._id,
    quantity: dto.quantity,
    productId: dto.productId ? mapProductDtoToModel(dto.productId) : dto.productId
  };
}
