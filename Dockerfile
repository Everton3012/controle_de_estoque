FROM node:alpine
WORKDIR /app
COPY . .
#RUN apk add --no-cache python2 g++ make
#ENV
EXPOSE 3000
CMD ["node", "src/server.ts"]