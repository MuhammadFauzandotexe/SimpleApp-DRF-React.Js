FROM node:18
EXPOSE 3000
WORKDIR /react-vite-app
COPY package.json .
RUN npm install
COPY . .
CMD [ "npx","vite","build"]
CMD [ "npx","vite","preview"]

