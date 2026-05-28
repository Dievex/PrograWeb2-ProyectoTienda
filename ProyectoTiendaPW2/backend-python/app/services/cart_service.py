from app.repositories.cart_repository import CartRepository
from app.repositories.product_repository import ProductRepository
from app.models.cart_model import CartItemModel
from app.core.exceptions import NotFoundError, BusinessRuleError

class CartService:
    def __init__(self, cart_repo: CartRepository, product_repo: ProductRepository):
        self.cart_repo = cart_repo
        self.product_repo = product_repo

    def get_cart(self, user_id: int) -> list[CartItemModel]:
        return self.cart_repo.get_by_user(user_id)

    def add_to_cart(self, user_id: int, product_id: int) -> list[CartItemModel]:
        product = self.product_repo.get_by_id(product_id)
        if not product:
            raise NotFoundError(f"Producto con id {product_id} no encontrado")

        existing_item = self.cart_repo.get_by_user_and_product(user_id, product_id)
        if existing_item:
            self.cart_repo.update_quantity(existing_item, existing_item.quantity + 1)
        else:
            self.cart_repo.create(user_id, product_id)

        return self.get_cart(user_id)

    def remove_from_cart(self, user_id: int, product_id: int) -> list[CartItemModel]:
        self.cart_repo.delete_by_product(user_id, product_id)
        return self.get_cart(user_id)

    def checkout(self, user_id: int) -> dict:
        cart_items = self.cart_repo.get_by_user(user_id)
        if not cart_items:
            raise BusinessRuleError("El carrito está vacío")

        for item in cart_items:
            product = item.product
            if not product:
                raise NotFoundError("Un producto del carrito ya no existe")
            if product.stock < item.quantity:
                raise BusinessRuleError(f"Stock insuficiente para {product.nombre}. Disponible: {product.stock}")

        for item in cart_items:
            product = item.product
            new_stock = product.stock - item.quantity
            self.product_repo.update(product.id, {"stock": new_stock})

        self.cart_repo.clear_user_cart(user_id)

        return {"message": "Compra realizada con éxito"}
