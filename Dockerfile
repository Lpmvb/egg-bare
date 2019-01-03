FROM registry.cn-hangzhou.aliyuncs.com/aliyun-node/alinode:4-alpine

WORKDIR /app

COPY package.json /app

RUN npm i --production

COPY . /app

EXPOSE 80

CMD npm run docker