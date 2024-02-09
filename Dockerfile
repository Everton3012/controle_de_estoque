FROM node:21.6.0-alpine
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .
CMD ["node", "dist/server.js"]
EXPOSE 3333