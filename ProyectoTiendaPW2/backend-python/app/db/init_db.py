from app.db.session import engine, SessionLocal
from app.db.base import Base
from app.models.user_model import UserModel
from app.models.product_model import ProductModel
from app.models.cart_model import CartItemModel
from app.core.security import get_password_hash

def init_db():
    print("Creating database tables...")
    Base.metadata.create_all(bind=engine)
    print("Database tables created successfully.")
    
    db = SessionLocal()
    try:
        admin_user = db.query(UserModel).filter(UserModel.username == "admin").first()
        if not admin_user:
            print("Creating admin user...")
            admin_user = UserModel(
                username="admin",
                password=get_password_hash("admin123"),
                role="admin"
            )
            db.add(admin_user)
            db.commit()
            print("Admin user created (username: admin, password: admin123).")
    finally:
        db.close()

if __name__ == "__main__":
    init_db()
