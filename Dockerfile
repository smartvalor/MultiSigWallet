FROM node:8-alpine
LABEL maintainer="smartvalor.com"

WORKDIR /srv/app

ADD .git /.app-version
ADD . /srv/app

ls -al /srv/app/dapp/

EXPOSE 8282

USER node

CMD ["./bin/grunt"]
