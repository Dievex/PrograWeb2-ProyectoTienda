from pydantic import BaseModel, Field
from app.schemas.user_schema import UserResponse

class LoginRequest(BaseModel):
    username: str
    password: str = Field(min_length=1)

class TokenResponse(BaseModel):
    token: str
    user: UserResponse | None = None
