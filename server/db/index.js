//this is the access point for all things database related!
const db = require("./db");
const Contact = require("./models/Contact");
const Website = require("./models/Website");

module.exports = {
  db,
  Contact,
  Website,
};
