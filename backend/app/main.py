import logging
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.api import receipts, insights, users
import traceback

# Configure logging
logging.basicConfig(
    format='[%(asctime)s] %(levelname)s %(message)s',
    level=logging.INFO
)
logger = logging.getLogger("uvicorn.error")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global exception handler for HTTPException
@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    logger.warning(f"HTTPException at {request.url}: {exc.detail}")
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail, "route": str(request.url)},
    )

# Global exception handler for generic exceptions
@app.exception_handler(Exception)
async def generic_exception_handler(request: Request, exc: Exception):
    tb = traceback.format_exc()
    logger.error(f"Unhandled error at {request.url}: {exc}\n{tb}")
    return JSONResponse(
        status_code=500,
        content={
            "detail": "Internal server error",
            "route": str(request.url),
            "trace": tb
        },
    )

app.include_router(receipts.router, prefix="/api/receipts", tags=["receipts"])
app.include_router(insights.router, prefix="/api/insights", tags=["insights"])
app.include_router(users.router, prefix="/api/users", tags=["users"]) 