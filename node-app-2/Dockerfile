FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# COPY package-lock.json .

RUN npm install -s

# Bundle app source
COPY . .

# Environment variables, for AWS should use the specific port 8080
ENV PORT=8080

EXPOSE 8080

# CMD [ "npm", "start" ]
