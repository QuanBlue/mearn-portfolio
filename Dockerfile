FROM node:latest

LABEL maintainer="QuanBlue <quannguyenthanh558@gmail.com>"

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . .

EXPOSE 5000

ENTRYPOINT [ "npm", "start"]
