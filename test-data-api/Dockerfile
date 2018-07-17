FROM node:8.11.3-alpine
RUN apk update && apk upgrade
RUN apk add nodejs yarn
RUN rm -rf /var/cache/apk/*

COPY ./src /src
WORKDIR /src
RUN yarn install
CMD ["node", "server.js"]
