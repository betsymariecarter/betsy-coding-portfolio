const Sequelize = require("sequelize");
const db = require("../db");

const Contact = db.define("contact", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  phone: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.TEXT,
  },
});

module.exports = Contact;
