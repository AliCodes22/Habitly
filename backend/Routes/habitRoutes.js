const express = require("express");
const router = express.Router();
const {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
} = require("../Controllers/habitController");
const requireAuth = require("../Middleware/authMiddleware");

router.use(requireAuth);
// get all habits
router.get("/:userId", getHabits);

// create new habit
router.post("/", createHabit);

// update habit
router.patch("/:id", updateHabit);

// delete habit
router.delete("/:id", deleteHabit);

module.exports = { router };
