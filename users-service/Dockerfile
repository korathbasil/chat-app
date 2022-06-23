FROM node:alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN "yarn global add @nestjs/cli"
RUN "yarn"
COPY . .
CMD {"yarn start:dev"}