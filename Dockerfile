# Stage 1: Builder
FROM node:22-slim AS builder

WORKDIR /app

RUN yarn install

COPY . .

RUN yarn build


# Stage 2: Runner
FROM node:22-slim

WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=builder /app/.output ./.output

COPY --from=builder /app/node_modules ./node_modules

COPY package.json .

EXPOSE 3000

CMD [ "yarn", "start" ]
