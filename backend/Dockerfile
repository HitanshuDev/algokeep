FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy rest of backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Start server
CMD ["npm", "start"]