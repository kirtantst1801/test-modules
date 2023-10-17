const Sequelize = require('sequelize')
require('dotenv').config()
const env = process.env.NODE_ENV
const config = require('./config.json')[env]
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER_NAME,
  process.env.PASSWORD,
  config
)

sequelize
  //.sync({logging: false})
  .authenticate()
  .then(() => {
    console.log('database connected successfully')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })
module.exports = sequelize
