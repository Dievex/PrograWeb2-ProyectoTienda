from pydantic import BaseModel, Field, ConfigDict
from app.schemas.product_schema import ProductResponse

class CartItemResponse(BaseModel):
    id: int = Field(serialization_alias="_id")
    quantity: int
    productId: ProductResponse = Field(validation_alias="product")

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)

class AddToCartRequest(BaseModel):
    productId: int
