FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN chmod +x ./run

ENTRYPOINT ["./run"]

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]