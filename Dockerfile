# Stage 1: build the app
FROM node:22-alpine3.22 AS build_stage

WORKDIR /opt/app

# Copy package.json to dir
COPY package*.json ./

RUN npm install

COPY . ./

RUN npx ng build --configuration production

FROM nginx:1.29.5-alpine-slim AS final_stage

WORKDIR /app

# copy the server config to the proper nginx folder
COPY server-test.conf /etc/nginx/conf.d/default.conf

COPY --from=build_stage /opt/app/dist/my-page/browser /usr/share/nginx/html/

# Expose the nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
