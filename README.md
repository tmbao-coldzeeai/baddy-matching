# Baddy Matching Service

## Running Locally

To run the baddy-matching service locally:

1. **Prerequisites**:
   - Docker and Docker Compose installed
   - User added to docker group (`sudo usermod -aG docker $USER`)

2. **Start the service**:
   ```bash
   cd /home/bao/.openclaw/workspace/baddy-matching
   docker compose up -d
   ```

3. **Service endpoints**:
   - Web UI: http://localhost:3000
   - API Server: http://localhost:3001
   - MongoDB: mongodb://localhost:27017

## Development Setup

For development, you can also run individual components:

```bash
# Start MongoDB
docker run -d --name baddy-mongodb -p 27017:27017 mongo:latest

# Start server (in development mode)
cd server && npm run dev

# Start web frontend (in development mode)
cd web && npm run dev
```

## Testing

Once services are running, you can test:
1. Access http://localhost:3000 for the web interface
2. Test API endpoints at http://localhost:3001