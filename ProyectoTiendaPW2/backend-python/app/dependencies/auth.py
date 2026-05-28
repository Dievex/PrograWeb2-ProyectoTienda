from fastapi import Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.security import decode_access_token
from app.core.exceptions import UnauthorizedError
from app.repositories.user_repository import UserRepository
from app.models.user_model import UserModel

security = HTTPBearer()

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
) -> UserModel:
    token = credentials.credentials
    payload = decode_access_token(token)
    
    if not payload:
        raise UnauthorizedError("Token inválido o expirado")
        
    user_id_str = payload.get("sub")
    if not user_id_str:
        raise UnauthorizedError("Token inválido")
        
    try:
        user_id = int(user_id_str)
    except ValueError:
        raise UnauthorizedError("Token inválido")

    user_repo = UserRepository(db)
    user = user_repo.get_by_id(user_id)
    
    if not user:
        raise UnauthorizedError("Usuario no encontrado")
        
    return user
