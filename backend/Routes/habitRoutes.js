const express = require("express");
const router = express.Router();

// get all habits
router.get("/", (req, res) => {
  res.status(200).json({
    message: "get habits route",
  });
});

// create new habit
router.post("/", (req, res) => {
  res.status(201).json({
    message: "create habit",
  });
});

// update habit
router.patch("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: `update habit ${id}`,
  });
});

// delete habit
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `Delete habit ${id} `,
  });
});
module.exports = { router };
