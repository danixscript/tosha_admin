FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

VOLUME [ "/app/node_modules" ]

CMD ["npm", "start"]


