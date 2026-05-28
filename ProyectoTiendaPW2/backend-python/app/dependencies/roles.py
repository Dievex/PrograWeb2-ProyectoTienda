from fastapi import Depends
from app.models.user_model import UserModel
from app.dependencies.auth import get_current_user
from app.core.exceptions import ForbiddenError

def require_admin(current_user: UserModel = Depends(get_current_user)) -> UserModel:
    if current_user.role != "admin":
        raise ForbiddenError("Se requiere rol de administrador para realizar esta acción")
    return current_user
