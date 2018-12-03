FROM node:8-alpine
LABEL maintainer="smartvalor.com"

# Install some additional packages
RUN apk add git

WORKDIR /srv/app

ADD .git /.app-version
ADD . /srv/app

EXPOSE 8282

USER node

CMD [".bin/grunt"]
