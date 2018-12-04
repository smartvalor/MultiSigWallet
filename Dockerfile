FROM node:8-alpine
LABEL maintainer="smartvalor.com"

ENV USER node
ENV GROUP node

ADD .git /.app-version
ADD . /srv/app

RUN chown -R $USER:$GROUP

WORKDIR /srv/app/dapp

EXPOSE 8282

USER $USER

CMD ["./node_modules/.bin/grunt"]
