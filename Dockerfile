FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN knex migrate:latest

RUN knex seed:run

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]