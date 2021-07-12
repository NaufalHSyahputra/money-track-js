FROM node:alpine as base

WORKDIR /src

COPY app/package*.json /

EXPOSE 8080

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY ./app /
CMD ["node", "server.js"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY ./app /
CMD ["nodemon", "server.js"]