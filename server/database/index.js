const mysql = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'ecommerce'
})

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err)
    return
  }
  console.log('Database connected!')
})
module.exports = connection