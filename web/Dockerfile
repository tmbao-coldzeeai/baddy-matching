FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies
RUN npm install --force

# Copy source code
COPY . .

# Build the Next.js app with all dependencies available for build process
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]