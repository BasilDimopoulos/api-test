FROM node

WORKDIR /user/src/app

COPY ./package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 7000
CMD ["node", "./src/index.js"]