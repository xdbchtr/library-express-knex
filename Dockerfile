FROM node:16-alpine

RUN apt update && apt install tzdata -y

ENV TZ="Asia/Jakarta"

WORKDIR /app

COPY package.json .

RUN npm install

RUN date

RUN apk update && apk add bash

COPY . .

EXPOSE 8080

CMD ["/bin/bash", "-c", "npm run migrate;npm run start"]