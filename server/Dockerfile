FROM node:18-alpine AS dev
USER node
WORKDIR /developer
EXPOSE 3000

FROM node:18-alpine AS prod
WORKDIR /production
COPY . .
RUN npm ci
EXPOSE 3000
CMD [ "node", "app" ]