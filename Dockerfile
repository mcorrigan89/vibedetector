FROM oven/bun:latest AS base

WORKDIR /app

# Copy package files
COPY package.json bun.lock* ./
COPY bunfig.toml ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["bun", "start"]