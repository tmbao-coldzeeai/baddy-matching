# Baddy-Matching - Badminton Player Matching Platform

A Tinder-like platform for badminton players to find match partners based on skill level, location, and preferred time frames.

## Project Structure

- `/web` - Next.js frontend application
- `/server` - Node.js backend with MongoDB
- `/proto` - Protocol buffers for message formatting
- `/docker` - Docker configuration files

## Features

- Player profiles with Name, Level (A-E), Location, Preferred Time Frames
- Tinder-like matching interface
- MongoDB storage for player data
- Containerized deployment with Podman

## Getting Started

1. Clone the repository
2. Install dependencies in both web and server folders
3. Configure MongoDB connection
4. Run with Podman containers

## Project Components

### Server (Backend)
- Built with Node.js and Express
- MongoDB database integration using Mongoose
- RESTful API endpoints for player management
- Validation and error handling middleware

### Web (Frontend)
- Built with Next.js and TypeScript
- Responsive design using Tailwind CSS
- Tinder-like UI for browsing players
- Integration with the backend API

### Protocol Buffers (Optional)
- Defined in `/proto/player.proto`
- Can be used for consistent data formats between frontend and backend

### Containerization
- Dockerfiles for both web and server components
- docker-compose.yml for orchestrating containers

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

## Technology Stack

### Backend
- Node.js with Express
- MongoDB with Mongoose ODM
- Protocol Buffers (optional)

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS

### Deployment
- Podman containers
- Docker Compose orchestration

## Development Setup

1. Clone the repository
2. Navigate to the project directory:
   ```
   cd baddy-matching
   ```

3. Install dependencies for both web and server:
   ```
   cd server && npm install
   cd ../web && npm install
   ```

4. Start the containers:
   ```
   podman-compose up
   ```

5. Access the application at:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## Production Deployment

For production deployment, use the provided Docker configuration files and container orchestration.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.