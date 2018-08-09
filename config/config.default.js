"use strict";

const { Op } = require("sequelize");

module.exports = appInfo => {
  const config = (exports = {});

  config.keys = appInfo.name + "_1533713533734_6250";

  config.middleware = [];

  config.security = {
    csrf: {
      enable: false
    }
  };

  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };

  config.onerror = {
    accepts: () => "json",
    json: (err, ctx) => {
      ctx.body = {
        status: "error",
        message: err.message
      };
      const { method, origin, ip } = ctx;
      const body = method === "GET" ? ctx.query : ctx.request.body;
      const logJson = {
        request: {
          method,
          originalUrl: origin,
          clientIp: ip,
          body
        },
        response: {
          status: ctx.status,
          body: JSON.stringify(ctx.body)
        }
      };
      ctx.logger.error(logJson);
    }
  };

  config.sequelize = {
    dialect: "mysql",
    database: process.env.EGG_MYSQL_DATABASE || "",
    host: process.env.EGG_MYSQL_HOST || "",
    port: process.env.EGG_MYSQL_PORT || "",
    username: process.env.EGG_MYSQL_USERNAME || "",
    password: process.env.EGG_MYSQL_PASSWORD || "",
    operatorsAliases: Op,
    pool: {
      max: 20,
      min: 0,
      idle: 10000
    },
    define: {
      charset: "utf8",
      underscored: true,
      underscoredAll: true
    },
    timezone: "+08:00"
  };

  config.alinode = {
    appid: process.env.EGG_ALINODE_APPID || "",
    secret: process.env.EGG_ALINODE_SECRET || ""
  };

  return config;
};
