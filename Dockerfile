FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./

RUN <Install dependencies>

COPY . .

EXPOSE <Port>

CMD <start npm server>
