FROM node:22.11.0 AS angular

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install -g @angular/cli && npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]

