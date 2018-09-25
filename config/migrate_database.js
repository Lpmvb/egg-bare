'use strict';

const defaultConfig = {
  dialect: 'mysql',
  database: process.env.EGG_MYSQL_DATABASE || '',
  host: process.env.EGG_MYSQL_HOST || '',
  port: process.env.EGG_MYSQL_PORT || '',
  username: process.env.EGG_MYSQL_USERNAME || '',
  password: process.env.EGG_MYSQL_PASSWORD || '',
  define: {
    charset: 'utf8',
    underscored: true,
    underscoredAll: true,
  },
  timezone: '+08:00',
  operatorsAliases: false,
};

module.exports = {
  development: defaultConfig,
  test: defaultConfig,
  production: defaultConfig,
};
