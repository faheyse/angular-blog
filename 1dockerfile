FROM node:latest as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /app/dist/blog /usr/share/nginx/html
