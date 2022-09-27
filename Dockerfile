FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN apk update && apk add bash

COPY . .

EXPOSE 8080

CMD ["/bin/bash", "-c", "knex migrate:all;knex seed:run;npm run start"]