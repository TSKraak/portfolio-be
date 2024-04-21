const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Project = require("../models").project;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const exp = await Project.findAll();

    if (!exp) {
      return res
        .status(404)
        .json({ message: "Sorry. No project results found." });
    }
    res.json(exp.reverse());
  } catch (e) {
    console.log("ERROR:", e);
    res.status(404).json({ message: "Something went wrong, sorry" });
    next(e);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const { project, image, company, description, url } = req.body;

  if (!project || !company || !description) {
    return res
      .status(400)
      .json({ message: "Please provide a project name, company and description." });
  }

  try {
    const newProject = await Project.create({
      project,
      image,
      company,
      description,
      url,
    });

    const returnProject = await Project.findByPk(newProject.id);

    if (!newProject) {
      return res
        .status(404)
        .json({ message: "Something went wrong.. Please try again." });
    }

    res.json(returnProject);
  } catch (e) {
    console.log("ERROR:", e);
    res.status(404).json({ message: "Something went wrong, sorry" });
    next(e);
  }
});

router.patch("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { project, image, company, description, url } = req.body;

  try {
    const projectToUpdate = await Project.findByPk(id);

    if (!projectToUpdate) {
      return res.status(404).json({ message: "Project not found." });
    }

    const updatedProject = await projectToUpdate.update({
      project,
      image,
      company,
      description,
      url,
    });

    res.json(updatedProject);
  } catch (e) {
    console.log("ERROR:", e);
    res.status(404).json({ message: "Something went wrong, sorry" });
    next(e);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;

  try {
    const projectToDelete = await Project.findByPk(id);

    if (!projectToDelete) {
      return res.status(404).json({ message: "Project not found." });
    }

    const deletedProject = await projectToDelete.destroy();

    res.json(deletedProject);
  } catch (e) {
    console.log("ERROR:", e);
    res.status(404).json({ message: "Something went wrong, sorry" });
    next(e);
  }
});

module.exports = router;
