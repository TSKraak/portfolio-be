const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both username and password" });
    }

    const user = await User.findOne({
      where: { username },
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that username not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: user.id });

    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
