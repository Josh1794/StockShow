const db = require('../db');
const Sequelize = require('sequelize');

const Portfolio = db.define('portfolio', {
  portfolioName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Portfolio;
