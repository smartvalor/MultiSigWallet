FROM node:10-alpine
LABEL maintainer="smartvalor.com"

ENV WORK_DIR="/srv/app"
ENV APP_DIR="${WORK_DIR}/dapp"

WORKDIR $WORK_DIR

COPY .git /.app-version
COPY dist $WORK_DIR

EXPOSE 8282

USER node

CMD ["${APP_DIR}/.bin/grunt"]
