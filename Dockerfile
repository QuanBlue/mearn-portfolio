FROM node:latest

LABEL maintainer="QuanBlue <quannguyenthanh558@gmail.com>"

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . .

RUN if ! -f .env ; then cp .env.example .env; fi

EXPOSE 5000

ENTRYPOINT [ "npm", "start"]
