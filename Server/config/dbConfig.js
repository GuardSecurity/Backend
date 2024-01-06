// config/dbConfig.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db-guard',
  password: '12345',
  port: 5432,
});

module.exports = pool;