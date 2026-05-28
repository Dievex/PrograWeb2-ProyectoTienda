from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.auth_schema import LoginRequest, TokenResponse
from app.repositories.user_repository import UserRepository
from app.services.auth_service import AuthService
from app.dependencies.auth import get_current_user

router = APIRouter(tags=["auth"])

def get_auth_service(db: Session = Depends(get_db)) -> AuthService:
    user_repo = UserRepository(db)
    return AuthService(user_repo)

@router.post("/login", response_model=TokenResponse)
def login(login_data: LoginRequest, auth_service: AuthService = Depends(get_auth_service)):
    return auth_service.authenticate_user(login_data)

@router.post("/register", response_model=TokenResponse)
def register(register_data: LoginRequest, auth_service: AuthService = Depends(get_auth_service), db: Session = Depends(get_db)):
    from app.services.user_service import UserService
    from app.schemas.user_schema import UserCreate
    user_service = UserService(UserRepository(db))
    
    user_create = UserCreate(username=register_data.username, password=register_data.password, role="user")
    user_service.create_user(user_create)
    
    return auth_service.authenticate_user(register_data)

@router.get("/profile", response_model=dict)
def profile(current_user = Depends(get_current_user)):
    return {
        "username": current_user.username,
        "role": current_user.role
    }
