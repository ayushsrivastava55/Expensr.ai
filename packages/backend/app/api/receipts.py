import logging
import shutil
from pathlib import Path
from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.receipt_parser import parse_receipt

# Configure logging
logger = logging.getLogger(__name__)

router = APIRouter()

# Define the base directory for receipt uploads
UPLOAD_DIR = Path("receipts")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

@router.post("/upload")
async def upload_receipt_endpoint(file: UploadFile = File(...)):
    """
    Accepts a receipt image, saves it locally, and returns parsed data.

    - Validates file type (JPEG/PNG).
    - Saves the file to the `receipts/` directory.
    - Calls the `parse_receipt` service.
    - Returns mock JSON data for now.
    """
    if file.content_type not in ["image/jpeg", "image/png"]:
        raise HTTPException(
            status_code=400,
            detail="Invalid file type. Please upload a JPEG or PNG image."
        )

    try:
        # Sanitize filename to prevent security issues like directory traversal
        # Although FastAPI handles this well, it's good practice.
        sanitized_filename = Path(file.filename).name
        file_path = UPLOAD_DIR / sanitized_filename
        logger.info(f"Receiving file: {sanitized_filename}")

        # Save the file to the local directory
        with file_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        logger.info(f"File saved to: {file_path}")

        # Call the parsing service with the file path
        parsed_data = parse_receipt(str(file_path))

        return parsed_data

    except Exception as e:
        logger.error(f"Error processing upload: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred while processing the file.")
    finally:
        # Ensure the uploaded file's buffer is closed
        if file and hasattr(file, 'file') and not file.file.closed:
            file.file.close()

@router.get("/{receipt_id}")
def get_receipt(receipt_id: str):
    """
    Placeholder for fetching specific receipt data from the database.
    This will be implemented in Phase 4.
    """
    # In the future, this will query the database for the receipt.
    return {"message": f"Placeholder for receipt {receipt_id}. To be implemented in Phase 4."} 