const { Router } = require("express");
const About = require("../models").about;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const about = await About.findAll();

    if (!about) {
      return res.status(404).json({ message: "Sorry. No about info found." });
    }
    res.json(about);
  } catch (e) {
    console.log("ERROR:", e);
    res.status(404).json({ message: "Something went wrong, sorry" });
    next(e);
  }
});

module.exports = router;
