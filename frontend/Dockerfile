FROM node:22-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 5173

EXPOSE 8080

CMD ["npm", "run", "dev"]
