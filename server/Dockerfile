FROM node:lts-alpine AS base

ENV NODE_ENV production

FROM base AS build

WORKDIR /app

# node-gyp
RUN apk add --no-cache build-base python3

COPY . .
RUN npm i -g pnpm && \
  pnpm i --prod=false --frozen-lockfile && \
  pnpm prisma generate && \
  pnpm build && \
  pnpm prune

FROM base

ENV DATABASE_URL=file:/data/sqlite.db
ENV PORT="8080"
ENV NODE_ENV="production"

WORKDIR /app

COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
COPY --from=build /app/server /app/server
COPY --from=build /app/prisma /app/prisma

CMD ["npm", "start"]
