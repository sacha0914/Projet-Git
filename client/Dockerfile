FROM node:18-alpine AS dev
USER node
WORKDIR /developer
EXPOSE 5173

FROM node:18-alpine AS build
WORKDIR /build
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine3.18-slim AS prod
COPY --from=build /build/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g","daemon off;" ]
