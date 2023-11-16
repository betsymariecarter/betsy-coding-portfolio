const router = require("express").Router();
const { Contact } = require("../db");

//all contacts view
router.get("/", async (req, res, next) => {
  try {
    const contacts = await Contact.findAll({
      include: {
        all: true,
      },
    });
    res.json(contacts);
  } catch (err) {
    next(err);
  }
});

//contact full view
router.get("/:id", async (req, res, next) => {
  try {
    const contactById = await Contact.findOne({
      where: { id: req.params.id },
      include: {
        all: true,
      },
    });
    res.json(contactById);
  } catch (err) {
    next(err);
  }
});

router.post("/addNewContact", async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.json(newContact);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
