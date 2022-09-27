FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["/bin/bash", "-c", "npm run start;npm run migrate"]