const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.status(201).json({
    status: 201,
    message: "login user",
  });
});

router.post("/register", (req, res) => {
  res.status(201).json({
    status: 201,
    message: "register user",
  });
});

module.exports = router;
