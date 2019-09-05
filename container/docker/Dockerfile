FROM node:alpine

RUN apk update && apk upgrade && \
    apk add --no-cache git 

RUN git clone https://github.com/microservice-base/ui.git

WORKDIR /ui/ui

# yarn build
# FROM nginx-alpine
# add build/ to container-image 
# i will add -yarn build- command for production
# init dependency
# multistage container

RUN yarn 

CMD ["yarn", "start"]
