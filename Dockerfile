FROM node:10-alpine
LABEL maintainer="smartvalor.com"

WORKDIR /srv/app

ADD .git /.app-version
ADD . /srv/app

EXPOSE 8282

USER node

CMD [".bin/grunt"]
