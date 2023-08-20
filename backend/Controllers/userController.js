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
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { name, password: hashedPassword, email, userId: uuidv4() };
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