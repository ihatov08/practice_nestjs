FROM node:16


RUN apt-get update -qq && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN yarn global add @nestjs/cli

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .
