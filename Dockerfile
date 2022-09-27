FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENTRYPOINT ["bash", "script.sh" ]

EXPOSE 8080

CMD ["npm", "run", "start"]