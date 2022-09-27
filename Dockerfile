FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN apk update && apk add bash

COPY . .

EXPOSE 8080

CMD ["/bin/bash", "-c", "npm run migrate;npm run seed;npm run start"]