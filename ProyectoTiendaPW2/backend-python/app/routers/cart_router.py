from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.cart_schema import CartItemResponse, AddToCartRequest
from app.repositories.cart_repository import CartRepository
from app.repositories.product_repository import ProductRepository
from app.services.cart_service import CartService
from app.models.user_model import UserModel
from app.dependencies.auth import get_current_user

router = APIRouter(prefix="/cart", tags=["cart"])

def get_cart_service(db: Session = Depends(get_db)) -> CartService:
    cart_repo = CartRepository(db)
    product_repo = ProductRepository(db)
    return CartService(cart_repo, product_repo)

@router.get("", response_model=list[CartItemResponse])
def get_cart(
    cart_service: CartService = Depends(get_cart_service),
    current_user: UserModel = Depends(get_current_user)
):
    return cart_service.get_cart(current_user.id)

@router.post("/add", response_model=list[CartItemResponse])
def add_to_cart(
    request: AddToCartRequest,
    cart_service: CartService = Depends(get_cart_service),
    current_user: UserModel = Depends(get_current_user)
):
    return cart_service.add_to_cart(current_user.id, request.productId)

@router.delete("/{product_id}", response_model=list[CartItemResponse])
def remove_from_cart(
    product_id: int,
    cart_service: CartService = Depends(get_cart_service),
    current_user: UserModel = Depends(get_current_user)
):
    return cart_service.remove_from_cart(current_user.id, product_id)

@router.post("/checkout")
def checkout(
    cart_service: CartService = Depends(get_cart_service),
    current_user: UserModel = Depends(get_current_user)
):
    return cart_service.checkout(current_user.id)
