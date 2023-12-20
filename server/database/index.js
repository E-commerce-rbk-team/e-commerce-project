const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'salim', 'rivenlol00', {
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
