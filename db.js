const mysql = require('mysql');

const config = {
  host: ['localhost', '::1', '127.0.0.1'],
  port: 3308,
  database: 'clientes',
  user: 'alan',
  password: '[olakase12]',
  connectionLimit: 100, // Ajusta según sea necesario
};


const pool = mysql.createPool(config);

module.exports = pool;
