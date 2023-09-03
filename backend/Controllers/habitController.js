const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { v4: uuidv4 } = require("uuid");
const client = new MongoClient(MONGO_URI, options);

// get habits
const getHabits = async (req, res, next) => {
  const { userId } = req.params;

  try {
    await client.connect();
    const db = client.db("habitly");
    const user = await db.collection("users").findOne({ userId });

    res.status(200).json({
      data: user.habits,
    });
  } catch (err) {
    next(err);
  }
};

const createHabit = async (req, res, next) => {
  if (!req.body) {
    throw new Error("please enter text");
  }

  const newHabit = { ...req.body, habitId: uuidv4(), progress: 0 };
  const { email } = req.body;

  try {
    await client.connect();

    const db = client.db("habitly");
    const result = await db
      .collection("users")
      .updateOne({ email }, { $push: { habits: newHabit } });

    if (result.modifiedCount === 1) {
      res
        .status(201)
        .json({ message: "Habit added successfully", data: newHabit });
    } else {
      res.status(400).json({ message: "Failed to add habit" });
    }
  } catch (err) {
    next(err);
  }
};

const updateHabit = async (req, res, next) => {
  const { userId, id } = req.params;

  try {
    await client.connect();
    const db = client.db("habitly");

    const user = await db.collection("users").findOne({ userId });
    const habit = user.habits.find((habit) => habit.habitId === id);

    if (habit) {
      habit.progress++;
    }

    if (habit.progress > habit.frequency) {
      habit.progress = habit.frequency;
    }

    await db.collection("users").updateOne({ userId }, { $set: user });

    res.status(200).json({
      message: "success",
      data: habit,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const deleteHabit = async (req, res, next) => {
  const { userId, id } = req.params;

  try {
    await client.connect();
    const db = client.db("habitly");
    const user = await db.collection("users").findOne({ userId });

    user.habits = user.habits.filter((habit) => habit.habitId !== id);

    await db
      .collection("users")
      .updateOne({ userId }, { $set: { habits: user.habits } });

    res.status(200).json({
      message: `Delete habit ${id} `,
      data: user.habits,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
};
