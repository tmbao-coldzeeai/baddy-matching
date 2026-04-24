# Baddy-Matching Web

Frontend for the Baddy-Matching badminton player matching platform.

## Features

- Tinder-like interface for finding badminton partners
- Player profiles with name, level, location, and preferred time frames
- Responsive design for all devices

## Technologies Used

- Next.js (React framework)
- TypeScript
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables (create a `.env.local` file):
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

To build for production:
```
npm run build
npm start
```

## Project Structure

- `pages/` - Next.js pages (index.tsx is the main page)
- `components/` - Reusable UI components
- `styles/` - Global CSS styles

## Environment Variables

The following environment variables are used:

- `NEXT_PUBLIC_API_URL` - URL of the backend API server (default: http://localhost:3001)

## Deployment

The frontend is designed to be deployed with the backend as part of a containerized solution using Podman.

## Development

For development, use:
```
npm run dev
```

This will start the Next.js development server.