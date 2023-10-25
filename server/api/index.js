//main entry point for server/api
//mounts all routes on /api + path
const router = require("express").Router();

router.use('/website', require ('./website'))
router.use('/contact', require ('./contact'))
router.use('/blog', require('./blog'))
router.use('/admin', require('./'))

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;