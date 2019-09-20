FROM node:9.8.0
WORKDIR /app
COPY . /app
RUN cd /app; npm i 
EXPOSE 3000 
CMD [ "node", "app.js" ]