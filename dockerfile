# BASE IMAGE with an alias #
FROM node:16.17.0 as build
WORKDIR /app

# Install Angular CLI to run Build #
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN ng build

# BASE IMAGE with an alias #
FROM nginx:alpine as runtime

# Copy contents from the other container with alias "build" #
# onto the specified path in the current container#
COPY --from=build /app/dist/blog /usr/share/nginx/html


# Expose port 80
EXPOSE 80