const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// create token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "20d" });
};

const client = new MongoClient(MONGO_URI, options);

const loginUser = async (req, res) => {
  await client.connect();

  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Incomplete fields");
  }

  try {
    const db = client.db("habitly");
    const user = await db.collection("users").findOne({ email });
    const match = await bcrypt.compare(password, user.password);
    const token = createToken(user._id);

    res.status(201).json({
      data: user,
      token,
      status: 201,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const registerUser = async (req, res) => {
  await client.connect();

  try {
    const db = await client.db("habitly");
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      res.status(404).json({
        message: "invalid fields",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      name,
      password: hashedPassword,
      email,
      habits: [],
      userId: uuidv4(),
    };

    // check if user already exists with email
    const isExistingUser = await db.collection("users").findOne({ email });

    if (isExistingUser) {
      return res.status(404).json({
        status: 404,
        message: "Email's already in use",
      });
    }

    await db.collection("users").insertOne(user);

    const token = createToken(user._id);

    res.status(201).json({
      status: 201,
      data: user,
      token,
    });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  await client.connect();

  const { id } = req.params;

  try {
    const { name, email } = req.body;

    const db = client.db("habitly");
    const collection = db.collection("users");
    const result = await collection.updateOne(
      { userId: id },
      { $set: { name, email } }
    );

    const updatedUser = await collection.findOne({ userId: id });

    if (result.matchedCount === 0) {
      // User with the given userId not found
      return res.status(404).json({ message: "User not found" });
    }

    // User information updated successfully
    res.status(200).json({
      message: "User information updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  loginUser,
  registerUser,
  updateUser,
};
