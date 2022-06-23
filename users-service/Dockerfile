FROM node:alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN "yarn"
COPY . .
CMD {"yarn start:dev"}