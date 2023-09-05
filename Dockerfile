FROM node:18-alpine

WORKDIR /usr/src/app

ADD .next .next
ADD package*.json .
ADD image_loader.js .

EXPOSE 3000

CMD ["npm", "start"]
