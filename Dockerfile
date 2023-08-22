FROM node:18-alpine

WORKDIR /usr/src/app

ADD .next .

EXPOSE 3000

CMD ["node","./standalone/server.js"]
