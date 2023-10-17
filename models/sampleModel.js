'use strict'
const Sequelize = require('sequelize')
const sequelize = require('../db')

const module = sequelize.define(
  'module',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },

  {
    paranoid: true,
  }
)

module.exports = module
