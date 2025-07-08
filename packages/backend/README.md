# Raseed Backend (FastAPI)

This is the backend for the Raseed project, built with FastAPI. It is designed to be ready for AI/ML/LLM integration and Google technologies.

## Endpoints

- `POST /api/receipts/upload` — Upload a receipt (image/video, ready for AI processing)
- `GET /api/receipts/{id}` — Get receipt data (after AI/ML extraction)
- `POST /api/insights/query` — Ask a question (for LLM/AI to answer)
- `GET /api/insights/summary` — Get spending insights (dummy for now)
- `POST /api/users/register` — Register user (for future Google auth)
- `POST /api/users/login` — Login user

## How to Run

1. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
2. Start the server:
   ```sh
   uvicorn app.main:app --reload
   ```

## Next Steps
- Integrate AI/ML/LLM models for receipt processing and insights
- Add Google Wallet and Google Cloud integrations
- Implement authentication (Google OAuth, etc.) 