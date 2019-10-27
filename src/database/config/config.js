const dotenv = require('dotenv');

dotenv.config();
const {
  DB_USER, DB_NAME, DB_PASSWORD, DB_HOST
} = process.env;
module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
};