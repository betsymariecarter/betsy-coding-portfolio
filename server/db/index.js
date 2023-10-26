//this is the access point for all things database related!
const db = require("./db");
const Contact = require("./models/Contact.js");
const Website = require("./models/Website.js");
const Blog = require("./models/Blog.js")

module.exports = {
  db,
  Contact,
  Website,
  Blog,
};
