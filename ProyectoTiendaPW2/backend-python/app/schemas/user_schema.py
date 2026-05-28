from pydantic import BaseModel, Field, ConfigDict
from typing import Literal
from datetime import datetime
from typing import Any

class UserCreate(BaseModel):
    username: str = Field(min_length=2, max_length=100)
    name: str | None = Field(default=None, min_length=2, max_length=100)
    password: str = Field(min_length=8)
    role: Literal["user", "admin"] = "user"

class UserUpdate(BaseModel):
    username: str | None = Field(default=None, min_length=2, max_length=100)
    name: str | None = Field(default=None, min_length=2, max_length=100)
    password: str | None = Field(default=None, min_length=8)
    role: Literal["user", "admin"] | None = None

class UserResponse(BaseModel):
    id: int = Field(serialization_alias="_id")
    username: str
    name: str | None = None
    role: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True, populate_by_name=True)
