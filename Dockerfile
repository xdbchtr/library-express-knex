FROM ubuntu:22.04
RUN apt-get update && apt-get install -y \
    nano \
    cron \
    git

FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN date

RUN apk update && apk add bash

COPY . .

EXPOSE 8080

CMD ["/bin/bash", "-c", "npm run migrate;npm run start"]