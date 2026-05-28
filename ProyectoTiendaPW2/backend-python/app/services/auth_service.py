from app.schemas.auth_schema import LoginRequest, TokenResponse
from app.repositories.user_repository import UserRepository
from app.core.security import verify_password, create_access_token
from app.core.exceptions import UnauthorizedError
from app.schemas.user_schema import UserResponse

class AuthService:
    def __init__(self, user_repo: UserRepository):
        self.user_repo = user_repo

    def authenticate_user(self, login_data: LoginRequest) -> TokenResponse:
        user = self.user_repo.get_by_username(login_data.username)
        if not user:
            raise UnauthorizedError("Credenciales inválidas")
        
        if not verify_password(login_data.password, user.password):
            raise UnauthorizedError("Credenciales inválidas")

        token_data = {"sub": str(user.id), "username": user.username, "role": user.role}
        access_token = create_access_token(token_data)

        user_response = UserResponse.model_validate(user)

        return TokenResponse(token=access_token, user=user_response)
