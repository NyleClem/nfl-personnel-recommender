FROM node:22
WORKDIR /app

# 1) copy only manifests first (better caching)
COPY package*.json ./

# 2) install deps using the lockfile (or use npm install if you prefer)
RUN npm ci

# 3) now copy the rest of the app
COPY . .

EXPOSE 3000
CMD ["node","index.js"]
