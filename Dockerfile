FROM node:16-alpine

WORKDIR /var/www/html

COPY package.json /var/www/html/.

RUN npm install

RUN apk update && apk add bash

COPY . /var/www/html/.

EXPOSE 8080

CMD ["/bin/bash", "-c", "npm run migrate;npm run start"]