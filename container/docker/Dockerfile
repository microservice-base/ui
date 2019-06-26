FROM node:alpine

RUN apk update && apk upgrade && \
    apk add --no-cache git 

RUN git clone https://github.com/microservice-base/ui.git

WORKDIR /ui/ui

# init dependency
RUN yarn 

CMD ["/bin/bash" "-c", " yarn start "]
