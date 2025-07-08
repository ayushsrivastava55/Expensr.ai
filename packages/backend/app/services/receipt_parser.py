import logging
from pathlib import Path

logger = logging.getLogger(__name__)

def parse_receipt(file_path: str) -> dict:
    """
    Parses a receipt file and returns structured data.

    Currently, this function returns mock data. In the future, it will
    be replaced with a call to the Gemini API to extract information
    from the receipt image.

    Args:
        file_path: The path to the receipt file.

    Returns:
        A dictionary containing the parsed receipt data.
    """
    logger.info(f"Parsing receipt (mock): {file_path}")
    
    # In the future, this will call the Gemini API.
    # For now, return mock data.
    mock_data = {
        "store": "Reliance Smart",
        "date": "2025-07-06",
        "items": [
            {"name": "Aashirvaad Atta", "qty": 1, "price": 300.0},
            {"name": "Milk", "qty": 2, "price": 60.0},
        ],
        "tax": 18.0,
        "total": 378.0,
    }
    return mock_data
