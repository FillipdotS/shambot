FROM node:16.17-alpine3.15

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]