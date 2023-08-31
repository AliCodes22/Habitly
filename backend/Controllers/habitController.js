const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { v4: uuidv4 } = require("uuid");

// get habits
const getHabits = async (req, res, next) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("habitly");

    res.status(200).json({
      message: "working habits",
      status: 200,
    });
  } catch (err) {
    next(err);
  }
};

const createHabit = async (req, res, next) => {
  if (!req.body) {
    throw new Error("please enter text");
  }

  const client = new MongoClient(MONGO_URI, options);
  const newHabit = req.body;
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

const updateHabit = (req, res, next) => {
  const { id } = req.params;

  try {
    res.status(200).json({
      message: "update habit",
    });
  } catch (err) {
    res.status(err.status).json;
  }
};

const deleteHabit = (req, res, next) => {
  const { id } = req.params;

  try {
    res.status(200).json({
      message: `Delete habit ${id} `,
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
