# Dockerfile for React client
FROM node:10.16-alpine

# Working directory be app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Instal dependencies
COPY package*.json ./
RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm", "start"]