# Use a modern Node (meets Vite's requirement)
FROM node:22

# Workdir inside the container
WORKDIR /app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm ci

# Copy the rest of the app
COPY . .

# Vite dev server runs on 5173 and needs to listen on 0.0.0.0 in Docker
EXPOSE 5173

# Start Vite; --host makes it reachable from your host
CMD ["npm", "run", "dev", "--", "--host"]
