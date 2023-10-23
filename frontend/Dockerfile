FROM node:18-alpine
WORKDIR /react-docker-univer/
COPY public/ /react-docker-univer/public
COPY src/ /react-docker-univer/src
COPY package.json /react-docker-univer/
RUN npm install
CMD ["npm", "start"]