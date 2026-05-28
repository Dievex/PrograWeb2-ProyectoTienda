from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from app.core.exceptions import (
    NotFoundError, UnauthorizedError,
    ForbiddenError, ConflictError, BusinessRuleError
)

def register_exception_handlers(app):
    @app.exception_handler(HTTPException)
    async def http_exception_handler(request: Request, exc: HTTPException):
        return JSONResponse(status_code=exc.status_code, content={"message": exc.detail})

    @app.exception_handler(NotFoundError)
    async def not_found_handler(request: Request, exc: NotFoundError):
        return JSONResponse(status_code=404, content={"message": exc.message})

    @app.exception_handler(UnauthorizedError)
    async def unauthorized_handler(request: Request, exc: UnauthorizedError):
        return JSONResponse(status_code=401, content={"message": exc.message})

    @app.exception_handler(ForbiddenError)
    async def forbidden_handler(request: Request, exc: ForbiddenError):
        return JSONResponse(status_code=403, content={"message": exc.message})

    @app.exception_handler(ConflictError)
    async def conflict_handler(request: Request, exc: ConflictError):
        return JSONResponse(status_code=409, content={"message": exc.message})

    @app.exception_handler(BusinessRuleError)
    async def business_rule_handler(request: Request, exc: BusinessRuleError):
        return JSONResponse(status_code=400, content={"message": exc.message})

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(request: Request, exc: RequestValidationError):
        errors = exc.errors()
        # Generar un mensaje amigable basado en los errores de Pydantic
        error_messages = []
        for error in errors:
            field = error.get("loc")[-1] if error.get("loc") else "campo"
            msg = error.get("msg")
            if error.get("type") == "string_too_short":
                error_messages.append(f"El campo '{field}' es demasiado corto.")
            elif error.get("type") == "value_error.email" or "email" in msg.lower():
                error_messages.append(f"El formato del usuario en '{field}' no es válido.")
            elif error.get("type") == "missing":
                error_messages.append(f"Falta el campo '{field}'.")
            else:
                error_messages.append(f"Error en '{field}': {msg}")
        
        custom_message = " ".join(error_messages)
        return JSONResponse(status_code=422, content={"message": custom_message})
