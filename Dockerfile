FROM node:16-slim

WORKDIR /app

ADD . /app

CMD npm run start
