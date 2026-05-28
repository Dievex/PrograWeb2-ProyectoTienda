from app.schemas.product_schema import ProductCreate, ProductUpdate
from app.repositories.product_repository import ProductRepository
from app.models.product_model import ProductModel
from app.core.exceptions import NotFoundError

class ProductService:
    def __init__(self, product_repo: ProductRepository):
        self.product_repo = product_repo

    def get_all_products(self) -> list[ProductModel]:
        return self.product_repo.get_all()

    def get_product_by_id(self, product_id: int) -> ProductModel:
        product = self.product_repo.get_by_id(product_id)
        if not product:
            raise NotFoundError(f"Producto con id {product_id} no encontrado")
        return product

    def create_product(self, product_data: ProductCreate) -> ProductModel:
        return self.product_repo.create(product_data.model_dump())

    def update_product(self, product_id: int, product_data: ProductUpdate) -> ProductModel:
        product = self.product_repo.get_by_id(product_id)
        if not product:
            raise NotFoundError(f"Producto con id {product_id} no encontrado")

        update_data = product_data.model_dump(exclude_unset=True)
        updated_product = self.product_repo.update(product_id, update_data)
        if not updated_product:
            raise NotFoundError(f"Producto con id {product_id} no encontrado")
        return updated_product

    def delete_product(self, product_id: int) -> None:
        success = self.product_repo.delete(product_id)
        if not success:
            raise NotFoundError(f"Producto con id {product_id} no encontrado")
