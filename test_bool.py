from pydantic import BaseModel
class M(BaseModel):
    a: bool | None = None
print(M(a="false").a)
print(M(a="true").a)
