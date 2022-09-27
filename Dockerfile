FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN ["knex", "migrate:all"]

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]