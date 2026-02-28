FROM node:22-alpine3.22

WORKDIR /app

# UPdate package manager
# RUN apk update

# Install nginx
RUN apk add nginx

# Copy package.json to dir
COPY package.json ./

RUN npm install

COPY . ./

RUN npx ng build --configuration production

# This will copy the conf to nginx folder.
COPY server-test.conf /etc/nginx/http.d

# Expose the nginx port
EXPOSE 70

CMD ["nginx", "-g", "daemon off;"]
