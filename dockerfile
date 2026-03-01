# 1️⃣ Builder stage
FROM node:21-alpine AS builder
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy source code
COPY . .

# Build Next.js (standalone build enabled in next.config.js)
RUN npm run build

# 2️⃣ Production / Runner stage
FROM node:21-alpine AS runner
WORKDIR /app

# Copy the standalone build output
COPY --from=builder /app/.next/standalone ./

# Copy static assets
COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/public ./public


# Expose port
EXPOSE 3000

# Run the standalone app
CMD ["node", "server.js"]