const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');

const Product = sequelize.define('Product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  categories: {
    type: DataTypes.STRING,
  },
  size: {
    type: DataTypes.STRING(50),
  },
  colour: {
    type: DataTypes.STRING(50),
  },
});

module.exports = Product;
