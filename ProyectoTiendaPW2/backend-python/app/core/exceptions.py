class NotFoundError(Exception):
    def __init__(self, message: str = "Recurso no encontrado"):
        self.message = message

class UnauthorizedError(Exception):
    def __init__(self, message: str = "No autorizado"):
        self.message = message

class ForbiddenError(Exception):
    def __init__(self, message: str = "Acceso denegado"):
        self.message = message

class ConflictError(Exception):
    def __init__(self, message: str = "Conflicto con el estado actual"):
        self.message = message

class BusinessRuleError(Exception):
    def __init__(self, message: str = "Regla de negocio incumplida"):
        self.message = message
