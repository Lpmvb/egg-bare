FROM registry.cn-hangzhou.aliyuncs.com/aliyun-node/alinode:3.11.5

WORKDIR /app

COPY package.json /app

RUN npm i --production

COPY . /app

EXPOSE 80

CMD npm run docker