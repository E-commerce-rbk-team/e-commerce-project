const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');
const User = require('./User.js');
const Product = require('./product');

const Wishlist = sequelize.define('Wishlist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id',
    },
  },
},
  {
    tableName: 'wishlist', 
  });

Wishlist.belongsTo(User, { foreignKey: 'UserId' });
Wishlist.belongsTo(Product, { foreignKey: 'postId' });

module.exports = Wishlist;
