from sqlalchemy.orm import Session
from app.models.cart_model import CartItemModel

class CartRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_user(self, user_id: int) -> list[CartItemModel]:
        return self.db.query(CartItemModel).filter(CartItemModel.user_id == user_id).all()

    def get_by_user_and_product(self, user_id: int, product_id: int) -> CartItemModel | None:
        return self.db.query(CartItemModel).filter(
            CartItemModel.user_id == user_id,
            CartItemModel.product_id == product_id
        ).first()

    def create(self, user_id: int, product_id: int) -> CartItemModel:
        cart_item = CartItemModel(user_id=user_id, product_id=product_id, quantity=1)
        self.db.add(cart_item)
        self.db.commit()
        self.db.refresh(cart_item)
        return cart_item

    def update_quantity(self, cart_item: CartItemModel, quantity: int) -> CartItemModel:
        cart_item.quantity = quantity
        self.db.commit()
        self.db.refresh(cart_item)
        return cart_item

    def delete_by_product(self, user_id: int, product_id: int) -> bool:
        item = self.get_by_user_and_product(user_id, product_id)
        if item:
            self.db.delete(item)
            self.db.commit()
            return True
        return False

    def clear_user_cart(self, user_id: int) -> None:
        self.db.query(CartItemModel).filter(CartItemModel.user_id == user_id).delete()
        self.db.commit()
