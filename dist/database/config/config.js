'use strict';var dotenv = require('dotenv');

dotenv.config();var _process$env =


process.env,DB_USER = _process$env.DB_USER,DB_NAME = _process$env.DB_NAME,DB_PASSWORD = _process$env.DB_PASSWORD;
module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres' },

  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres' } };