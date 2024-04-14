# FROM node:18-slim AS base
# # RUN apt-get update && \
# #   apt-get install curl -y --no-install-recommends
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
# COPY . /app
# WORKDIR /app
#
# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store  pnpm i -P --frozen-lockfile
#
# FROM base AS build
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store  pnpm i --frozen-lockfile
# RUN pnpm build
#
# FROM base
# COPY --from=prod-deps /app/node_modules ./node_modules
# COPY --from=build /app/dist ./dist
# EXPOSE 1337
# CMD ["pnpm", "start"]

############################

# Inspiration: https://pnpm.io/docker#example-1-build-a-bundle-in-a-docker-container
# https://pnpm.io/fr/docker
# https://blog.crafteo.io/2023/07/16/169/

# FROM node:18-alpine3.18
# # Installing libvips-dev for sharp Compatibility
# RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
FROM node:18-slim AS base

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /opt/
COPY package.json pnpm-lock.yaml ./
# RUN pnpm add -g node-gyp
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm config set store-dir /pnpm/store && \
  pnpm config set package-import-method copy && \
  pnpm install
# RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
# RUN ["pnpm", "build"]
EXPOSE 1337
CMD ["pnpm", "develop"]
