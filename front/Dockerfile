FROM mhart/alpine-node
RUN apk add yarn

WORKDIR /app

COPY package.json yarn.lock
RUN yarn install

COPY . /app
CMD yarn start
