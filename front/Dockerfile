FROM mhart/alpine-node
RUN apk add yarn

WORKDIR /app

COPY package.json yarn.lock
COPY . /app
RUN yarn install

CMD yarn start