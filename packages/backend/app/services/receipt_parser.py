import logging
import json
from pathlib import Path
import google.generativeai as genai
from app.config import settings

# Configure logging
logger = logging.getLogger(__name__)

# --- Mock Data for Fallback ---
MOCK_DATA = {
    "store": "Mock Store",
    "date": "2025-01-01",
    "items": [
        {"name": "Mock Item 1", "qty": 1, "price": 10.0},
        {"name": "Mock Item 2", "qty": 2, "price": 5.0},
    ],
    "tax": 1.50,
    "total": 21.50,
    "currency": "$"
}

# --- Gemini API Configuration ---
try:
    genai.configure(api_key=settings.GEMINI_API_KEY)
    logger.info("Gemini API configured successfully.")
except Exception as e:
    logger.error(f"Failed to configure Gemini API: {e}. The service will use mock data.")
    genai = None

# --- Gemini API Call ---
def call_gemini_vision_api(image_path: Path) -> dict:
    """
    Calls the Gemini Vision API to parse the receipt image.
    """
    if not genai:
        raise ConnectionError("Gemini API is not configured.")

    model = genai.GenerativeModel('gemini-1.5-flash')
    image = genai.upload_file(str(image_path))

    prompt = """
    You are an expert receipt processing AI. Analyze the provided receipt image and extract the following information in a structured JSON format:
    1.  `store`: The name of the store or vendor.
    2.  `date`: The date of the transaction in YYYY-MM-DD format.
    3.  `items`: A list of purchased items, where each item is an object with:
        - `name`: The name of the item.
        - `qty`: The quantity of the item (default to 1 if not specified).
        - `price`: The price of a single unit of the item.
    4.  `tax`: The total tax amount (if available, otherwise null).
    5.  `total`: The final total amount of the bill.
    6.  `currency`: The currency symbol (e.g., $, €, ₹) or ISO code (e.g., USD, EUR, INR).

    Provide ONLY the JSON object in your response, with no other text or markdown formatting.
    """

    logger.info(f"Sending request to Gemini API for image: {image_path.name}")
    response = model.generate_content([prompt, image])
    
    # Clean up the response to get only the JSON part
    cleaned_response = response.text.strip().replace('```json', '').replace('```', '').strip()
    
    logger.info("Received response from Gemini API.")
    return json.loads(cleaned_response)

# --- Main Parsing Service ---
def parse_receipt(file_path: str) -> dict:
    """
    Parses a receipt file using the Gemini API with a fallback to mock data.
    """
    try:
        logger.info(f"Attempting to parse receipt with Gemini: {file_path}")
        parsed_data = call_gemini_vision_api(Path(file_path))
        logger.info("Successfully parsed receipt with Gemini.")
        return parsed_data
    except Exception as e:
        logger.error(f"Gemini parsing failed: {e}. Falling back to mock data.")
        return MOCK_DATA
