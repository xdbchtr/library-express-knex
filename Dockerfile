FROM node:16-alpine

RUN apt-get update && apt-get install -y \
    nano \
    cron \
    git

WORKDIR /app

COPY package.json .

RUN npm install

RUN date

RUN apk update && apk add bash

COPY . .

EXPOSE 8080

CMD ["/bin/bash", "-c", "npm run migrate;npm run start"]