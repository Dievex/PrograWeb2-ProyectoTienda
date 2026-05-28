from app.schemas.user_schema import UserCreate, UserUpdate
from app.repositories.user_repository import UserRepository
from app.models.user_model import UserModel
from app.core.exceptions import NotFoundError, ConflictError
from app.core.security import get_password_hash

class UserService:
    def __init__(self, user_repo: UserRepository):
        self.user_repo = user_repo

    def get_all_users(self) -> list[UserModel]:
        return self.user_repo.get_all()

    def get_user_by_id(self, user_id: int) -> UserModel:
        user = self.user_repo.get_by_id(user_id)
        if not user:
            raise NotFoundError(f"Usuario con id {user_id} no encontrado")
        return user

    def create_user(self, user_data: UserCreate) -> UserModel:
        existing_user = self.user_repo.get_by_username(user_data.username)
        if existing_user:
            raise ConflictError(f"El usuario {user_data.username} ya está en uso")

        data_dict = user_data.model_dump()
        data_dict["password"] = get_password_hash(data_dict["password"])
        
        return self.user_repo.create(data_dict)

    def update_user(self, user_id: int, user_data: UserUpdate) -> UserModel:
        user = self.user_repo.get_by_id(user_id)
        if not user:
            raise NotFoundError(f"Usuario con id {user_id} no encontrado")

        if user_data.username and user_data.username != user.username:
            existing_user = self.user_repo.get_by_username(user_data.username)
            if existing_user:
                raise ConflictError(f"El usuario {user_data.username} ya está en uso")

        update_data = user_data.model_dump(exclude_unset=True)
        if "password" in update_data:
            update_data["password"] = get_password_hash(update_data["password"])

        updated_user = self.user_repo.update(user_id, update_data)
        if not updated_user:
            raise NotFoundError(f"Usuario con id {user_id} no encontrado")
        return updated_user

    def delete_user(self, user_id: int) -> None:
        success = self.user_repo.delete(user_id)
        if not success:
            raise NotFoundError(f"Usuario con id {user_id} no encontrado")
