FROM node:20-alpine

WORKDIR /home/node/app

COPY ./src /home/node/app

RUN npm install
RUN npm install -g sequelize-cli

EXPOSE 3000

CMD [ "npm", "start" ]
