FROM keymetrics/pm2:10-alpine

COPY src src
COPY package.json .
COPY pm2.json .
COPY .env .

ENV NPM_CONFIG_LOGLEVEL warn
RUN yarn install --production
RUN yarn compile

RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2.json" ]