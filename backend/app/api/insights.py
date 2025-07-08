from fastapi import APIRouter, Body
from fastapi.responses import JSONResponse

router = APIRouter()

@router.post("/query")
def query_insights(question: str = Body(..., embed=True)):
    # Placeholder for LLM/AI integration
    return JSONResponse({"question": question, "answer": "This is a placeholder answer from the AI."})

@router.get("/summary")
def get_summary():
    # Placeholder for spending insights
    return {"summary": "This is a placeholder spending summary."} 