const path = require('path');
const { Sequelize } = require('sequelize');
const nodeCache = require(path.join(process.cwd(), 'src/config/lib/nodecache'));

const DB_NAME = nodeCache.getValue('DB_NAME');
const DB_HOST = nodeCache.getValue('DB_HOST');
const DB_USER = nodeCache.getValue('DB_USER');
const DB_PASS = nodeCache.getValue('DB_PASS');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: false,
  sync: true,
});

module.exports = sequelize;
