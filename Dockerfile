# Use an official Node.js runtime as a parent image
FROM node:16-alpine AS build

# Set the working directory to /app
WORKDIR /app

# Install the Angular CLI
# RUN npm install -g @angular/cli

# Copy the package.json and package-lock.json files to the container
# COPY package*.json ./
COPY . .

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
# COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a lightweight web server to serve the Angular app
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html