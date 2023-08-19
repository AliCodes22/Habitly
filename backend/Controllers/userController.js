const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { v4: uuidv4 } = require("uuid");

const loginUser = (req, res) => {
  res.status(201).json({
    message: "login user",
    status: 201,
  });
};

const registerUser = (req, res) => {
  res.status(201).json({
    message: "register user",
    status: 201,
  });
};

module.exports = {
  loginUser,
  registerUser,
};
