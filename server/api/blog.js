const router = require("express").Router();
const {
  models: { Blog },
} = require("../db");

//blog gallery view
router.get("/", async (req, res, next) => {
  try {
    const allPosts = await Blog.findAll({
      include: {
        all: true,
      },
    });
    res.json(allPosts);
  } catch (err) {
    next(err);
  }
});

//blog post full view
router.get("/:id", async (req, res, next) => {
  try {
    const blogPost = await Blog.findOne({
      where: { id: req.params.id },
      include: {
        all:true,
      },
    });
    res.json(blogPost);
  } catch (err) {
    next(err);
  }
});

router.post("/post", async (req, res) => {  
    try {
      const newPost = await Blog.create(req.body);
      res.json(newPost);
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;