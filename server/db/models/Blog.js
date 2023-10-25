const Sequelize = require("sequelize");
const db = require("../db");

const Blog = db.define("blog", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATEONLY,
  },
  content: {
    type: Sequelize.TEXT,
  },
  pictures: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  }
});

module.exports = Blog;