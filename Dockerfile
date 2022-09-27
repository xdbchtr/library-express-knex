FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN chmod +x ./run

ENTRYPOINT ["./run"]

EXPOSE 8080