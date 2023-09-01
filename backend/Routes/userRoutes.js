const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  updateUser,
} = require("../Controllers/userController");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.patch("/:id", updateUser);

module.exports = router;
