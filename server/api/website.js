const router = require("express").Router();
const { Website } = require("../db");

//all websites view
router.get("/", async (req, res, next) => {
  try {
    const websites = await Website.findAll({
      include: {
        all: true,
      },
    });
    res.json(websites);
  } catch (err) {
    next(err);
  }
});

//website full view
router.get("/:id", async (req, res, next) => {
  try {
    const siteById = await Website.findOne({
      where: { id: req.params.id },
      include: {
        all:true,
      },
    });
    res.json(siteById);
  } catch (err) {
    next(err);
  }
});

module.exports = router;