from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.user_schema import UserCreate, UserUpdate, UserResponse
from app.repositories.user_repository import UserRepository
from app.services.user_service import UserService
from app.models.user_model import UserModel
from app.dependencies.auth import get_current_user
from app.dependencies.roles import require_admin

router = APIRouter(prefix="/users", tags=["users"])

def get_user_service(db: Session = Depends(get_db)) -> UserService:
    user_repo = UserRepository(db)
    return UserService(user_repo)

@router.get("", response_model=list[UserResponse])
def get_users(
    user_service: UserService = Depends(get_user_service),
    current_user: UserModel = Depends(require_admin)
):
    return user_service.get_all_users()

@router.get("/{user_id}", response_model=UserResponse)
def get_user(
    user_id: int,
    user_service: UserService = Depends(get_user_service),
    current_user: UserModel = Depends(require_admin)
):
    return user_service.get_user_by_id(user_id)

@router.post("", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def create_user(
    user_data: UserCreate,
    user_service: UserService = Depends(get_user_service),
    current_user: UserModel = Depends(require_admin)
):
    return user_service.create_user(user_data)

@router.put("/{user_id}", response_model=UserResponse)
def update_user(
    user_id: int,
    user_data: UserUpdate,
    user_service: UserService = Depends(get_user_service),
    current_user: UserModel = Depends(require_admin)
):
    return user_service.update_user(user_id, user_data)

from pydantic import BaseModel

class RoleUpdate(BaseModel):
    rol: str

@router.put("/{user_id}/role", response_model=UserResponse)
def update_user_role(
    user_id: int,
    role_data: RoleUpdate,
    user_service: UserService = Depends(get_user_service),
    current_user: UserModel = Depends(require_admin)
):
    new_role = "user" if role_data.rol == "usuario" else role_data.rol
    update_data = UserUpdate(role=new_role)
    return user_service.update_user(user_id, update_data)

@router.delete("/{user_id}", status_code=status.HTTP_200_OK)
def delete_user(
    user_id: int,
    user_service: UserService = Depends(get_user_service),
    current_user: UserModel = Depends(require_admin)
):
    user_service.delete_user(user_id)
    return {"message": "Usuario eliminado exitosamente"}
