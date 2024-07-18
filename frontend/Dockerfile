FROM --platform=linux/amd64 node:22-alpine3.18

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]