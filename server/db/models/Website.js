const Sequelize = require('sequelize')
const db = require('../db')

const Website = db.define('website', {
  imageUrl: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  title: {
    type: Sequelize.STRING,
    defaultValue: "Untitled",
  },
  links: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  linkName: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  description: {
    type: Sequelize.TEXT,
  },
  capabilities: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  strategies: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  language: {
    type: Sequelize.STRING,
  },
  credits: {
    type: Sequelize.STRING,
  },
})

module.exports = Website;