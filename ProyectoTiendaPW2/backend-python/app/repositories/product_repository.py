from sqlalchemy.orm import Session
from app.models.product_model import ProductModel

class ProductRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self) -> list[ProductModel]:
        return self.db.query(ProductModel).all()

    def get_by_id(self, product_id: int) -> ProductModel | None:
        return self.db.query(ProductModel).filter(ProductModel.id == product_id).first()

    def create(self, data: dict) -> ProductModel:
        product = ProductModel(**data)
        self.db.add(product)
        self.db.commit()
        self.db.refresh(product)
        return product

    def update(self, product_id: int, data: dict) -> ProductModel | None:
        product = self.get_by_id(product_id)
        if not product:
            return None
        for key, value in data.items():
            setattr(product, key, value)
        self.db.commit()
        self.db.refresh(product)
        return product

    def delete(self, product_id: int) -> bool:
        product = self.get_by_id(product_id)
        if not product:
            return False
        self.db.delete(product)
        self.db.commit()
        return True
