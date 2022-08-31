const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const FollowingUser = require("../models/").followingUser;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();

    if (!users) {
      return res.status(404).json({ message: "Sorry. No users found." });
    }
    res.json(users);
  } catch (e) {
    console.log("ERROR:", e);
    res.status(404).json({ message: "Something went wrong, sorry" });
    next(e);
  }
});

module.exports = router;
