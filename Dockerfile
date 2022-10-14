
FROM node:16-alpine

RUN apt-get update && apt-get install -y \
    nano \
    cron \
    git

COPY . /var/www/html

WORKDIR /var/www/html

COPY package.json .

RUN npm install

ENV TZ="Asia/Jakarta"

RUN apk update && apk add bash

COPY . .

EXPOSE 8080

CMD ["/bin/bash", "-c", "npm run migrate;npm run start"]