'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1516195381829_1524';

  // add your config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'prod',
      password: 'prod',
      database: 'dev',
    },
    app: true,
    agent: false,
  };

  return config;
};
