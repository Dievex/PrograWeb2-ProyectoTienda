from sqlalchemy.orm import Session
from app.models.user_model import UserModel

class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self) -> list[UserModel]:
        return self.db.query(UserModel).all()

    def get_by_id(self, user_id: int) -> UserModel | None:
        return self.db.query(UserModel).filter(UserModel.id == user_id).first()

    def get_by_username(self, username: str) -> UserModel | None:
        return self.db.query(UserModel).filter(UserModel.username == username).first()

    def create(self, data: dict) -> UserModel:
        user = UserModel(**data)
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

    def update(self, user_id: int, data: dict) -> UserModel | None:
        user = self.get_by_id(user_id)
        if not user:
            return None
        for key, value in data.items():
            setattr(user, key, value)
        self.db.commit()
        self.db.refresh(user)
        return user

    def delete(self, user_id: int) -> bool:
        user = self.get_by_id(user_id)
        if not user:
            return False
        self.db.delete(user)
        self.db.commit()
        return True
