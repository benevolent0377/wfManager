from fastapi import FastAPI 
from app.routers.system import health as health_router

def register_routers(app: FastAPI):
    app.include_router(health_router.router)

