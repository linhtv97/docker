FROM node:12

RUN mkdir /docker

WORKDIR /docker

ADD ./ ./

RUN yarn install

EXPOSE 4000

CMD node server.js