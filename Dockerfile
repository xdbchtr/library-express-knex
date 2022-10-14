FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

ENV TZ="Asia/Jakarta"

RUN date

RUN apk update && apk add bash

COPY . .

EXPOSE 8080

CMD ["/bin/bash", "-c", "npm run migrate;npm run start"]