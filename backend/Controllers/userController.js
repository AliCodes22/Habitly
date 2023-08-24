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
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const client = new MongoClient(MONGO_URI, options);

const loginUser = (req, res) => {
  res.status(201).json({
    message: "login user",
    status: 201,
  });
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
      habits: {},
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

module.exports = {
  loginUser,
  registerUser,
};
