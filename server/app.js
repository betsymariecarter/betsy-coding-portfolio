const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json())

// app.use("/auth", require("./auth"));
app.use('/api', require('./api'));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.listen(process.env.PORT || 3000);

module.exports = app;