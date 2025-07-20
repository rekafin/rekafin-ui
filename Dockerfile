# Stage 1: Builder
FROM node:22-slim AS builder

WORKDIR /app

# Copy package files and install dependencies first
COPY package.json ./
RUN yarn install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN yarn build


# Stage 2: Runner
FROM node:22-slim

WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD [ "yarn", "start" ]
