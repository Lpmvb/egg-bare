'use strict';

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.alinode = {
  enable: true,
  package: 'egg-alinode',
  env: ['prod', 'dev'],
};
