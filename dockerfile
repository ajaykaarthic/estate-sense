FROM node:18-alpine
WORKDIR /ui/
COPY public/ /ui/public
COPY src/ /ui/src
COPY package.json /ui/
RUN npm install
CMD ["npm", "start"]


