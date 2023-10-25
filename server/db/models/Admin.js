const Sequelize = require("sequelize");
const db = require("../db");

const Admin = db.define("admin", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Admin;