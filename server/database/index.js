const mysql = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Faouzia Chebbi1',
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

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', '54196048', {
  host: 'localhost',
  dialect: 'mysql', 
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
