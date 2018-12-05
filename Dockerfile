FROM node:8-alpine

ADD .git /.app-version
ADD . /srv/app

RUN chown -R node:node /srv/app

WORKDIR /srv/app/dapp

EXPOSE 8282

USER node

CMD ["./node_modules/.bin/grunt"]
