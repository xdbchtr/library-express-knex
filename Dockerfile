FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN chmod +x ./script

ENTRYPOINT ["./script"]

EXPOSE 8080

CMD ["npm", "run", "start"]