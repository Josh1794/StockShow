const db = require('../db');
const Sequelize = require('sequelize');

const Stock = db.define('stock', {
  symbol: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUppercase: true,
      isAlpha: true,
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      isNumeric: true,
      notEmpty: true,
      isDecimal: true,
    },
  },
  pricePaid: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      isNumeric: true,
      notEmpty: true,
      isDecimal: true,
    },
  },
  DatePurchased: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = Stock;
