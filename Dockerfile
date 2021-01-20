FROM node:alpine

WORKDIR /app

RUN apk update && apk add python make g++

EXPOSE 3000

CMD ["npm", "start"]

COPY package.json .

RUN npm install
COPY . .
