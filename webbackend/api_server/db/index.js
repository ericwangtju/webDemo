const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  port: 8889,
  user: 'root',
  password: 'qweasd',
  database: 'my_db_01'
})

module.exports = db