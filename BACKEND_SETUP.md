# Backend Connection Guide

## Development Setup

1. **Create `.env` file** in the root directory:
```bash
VITE_API_URL=http://localhost:8000
```

2. **Start your FastAPI backend** on port 8000:
```bash
# In your backend directory
python -m uvicorn main:app --reload --port 8000
```

3. **Start the frontend**:
```bash
npm run dev
```

The frontend will now connect to your local FastAPI backend.

---

## Production Deployment

### Option 1: Deploy Backend First

1. Deploy your FastAPI backend to a hosting service (e.g., Railway, Render, DigitalOcean)
2. Get your production API URL (e.g., `https://api.shikshik.com`)
3. Update the frontend environment variable
4. Deploy the frontend

### Option 2: Environment Variable Setup

Create `.env.production`:
```bash
VITE_API_URL=https://your-production-api-url.com
```

### Build Commands

**Development:**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
```

The build will use the `VITE_API_URL` from your environment.

---

## CORS Configuration

Your FastAPI backend already has CORS configured. Make sure the allowed origins include your frontend domain in production:

```python
# In your main.py
ALLOWED_ORIGINS = "https://your-frontend-domain.com,https://www.your-frontend-domain.com"
```

---

## API Endpoints Used

The frontend connects to these endpoints:

- `GET /api/stores` - Get all stores
- `GET /api/stores/{city}` - Get stores by city
- `GET /api/stores/search/{q}` - Search stores

Make sure your backend is running and these endpoints are accessible.

---

## Testing the Connection

1. Open browser console (F12)
2. You should see successful API calls to your backend
3. If you see CORS errors, check your backend CORS configuration
4. If you see connection refused, check that your backend is running

---

## Troubleshooting

**Problem:** Cannot connect to backend
- Verify backend is running on the correct port
- Check `.env` file has correct URL
- Verify no firewall blocking the connection

**Problem:** CORS errors
- Update `ALLOWED_ORIGINS` in your FastAPI backend
- In development, use `"*"` to allow all origins
- In production, specify exact frontend domain

**Problem:** 404 errors
- Verify API endpoint paths match your FastAPI routes
- Check that `/api` prefix is correct in your backend
