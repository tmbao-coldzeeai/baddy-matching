# Baddy-Matching Server

Backend server for the Baddy-Matching badminton player matching platform.

## Features

- RESTful API for player management
- MongoDB database integration
- Player search functionality
- Validation middleware
- Error handling

## API Endpoints

### Players

- `GET /api/players` - Get all players
- `GET /api/players/:id` - Get a specific player by ID
- `POST /api/players` - Create a new player
- `PUT /api/players/:id` - Update an existing player
- `DELETE /api/players/:id` - Delete a player
- `POST /api/players/search` - Search players by criteria

### Health Check

- `GET /health` - Server health status

## Requirements

- Node.js v16+
- MongoDB

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Set up MongoDB connection (update `MONGODB_URI` in server.js or environment variables)

3. Start the server:
   ```
   npm start
   ```

## Development

For development, use:
```
npm run dev
```

This will start the server with nodemon for automatic reloading.