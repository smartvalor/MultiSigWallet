FROM node:8-alpine
LABEL maintainer="smartvalor.com"

ADD .git /.app-version
ADD . /srv/app

WORKDIR /srv/app/dapp

EXPOSE 8282

USER node

CMD ["./node_modules/.bin/grunt"]
