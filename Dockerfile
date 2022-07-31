# docker file
FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
# RUN npm install -g nodemon
COPY . .
EXPOSE 3000
ENV CMD "npm run dev"
CMD $CMD