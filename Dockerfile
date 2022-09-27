FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm migrate

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]