const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

    res.status(201).json({
      status: 201,
      data: user,
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
