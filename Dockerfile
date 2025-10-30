FROM node:22-alpine

RUN npm install -g @angular/cli

WORKDIR /vehicule-front

COPY . .

RUN npm install

EXPOSE 4200

CMD ["ng","serve", "-o"]




