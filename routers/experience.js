const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Experience = require("../models/").experience;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const exp = await Experience.findAll();

    if (!exp) {
      return res
        .status(404)
        .json({ message: "Sorry. No experience results found." });
    }
    res.json(exp);
  } catch (e) {
    console.log("ERROR:", e);
    res.status(404).json({ message: "Something went wrong, sorry" });
    next(e);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const { title, logo, company, period, description } = req.body;

  if (!title || !company || !description) {
    return res
      .status(400)
      .json({ message: "Please provide a title, company and description." });
  }

  try {
    const newExperience = await Experience.create({
      title,
      logo,
      company,
      period,
      description,
    });

    const returnExperience = await Experience.findByPk(newExperience.id);

    if (!newExperience) {
      return res
        .status(404)
        .json({ message: "Something went wrong.. Please try again." });
    }

    res.json(returnExperience);
  } catch (e) {
    console.log("ERROR:", e);
    res.status(404).json({ message: "Something went wrong, sorry" });
    next(e);
  }
});

router.patch("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { title, logo, company, period, description } = req.body;

  try {
    const experienceToUpdate = await Experience.findByPk(id);

    if (!experienceToUpdate) {
      return res.status(404).json({ message: "Experience not found." });
    }

    const updatedExperience = await experienceToUpdate.update({
      title,
      logo,
      company,
      period,
      description,
    });

    res.json(updatedExperience);
  } catch (e) {
    console.log("ERROR:", e);
    res.status(404).json({ message: "Something went wrong, sorry" });
    next(e);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;

  try {
    const experienceToDelete = await Experience.findByPk(id);

    if (!experienceToDelete) {
      return res.status(404).json({ message: "Experience not found." });
    }

    const deletedExperience = await experienceToDelete.destroy();

    res.json(deletedExperience);
  } catch (e) {
    console.log("ERROR:", e);
    res.status(404).json({ message: "Something went wrong, sorry" });
    next(e);
  }
});

module.exports = router;
