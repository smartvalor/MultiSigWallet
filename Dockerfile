FROM node:10-alpine
LABEL maintainer="smartvalor.com"

WORKDIR /srv/app

COPY .git /.app-version
COPY dist $WORK_DIR

EXPOSE 8282

USER node

CMD [".bin/grunt"]
