const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  await client.connect();

  if (!authorization) {
    return res.status(401).json({
      message: "Authorization token required",
    });
  }

  const token = authorization.split(" ")[1];

  try {
    const db = client.db("habitly");
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await db.collection("users").findOne({ _id });

    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({
      message: "Request is not authorized",
    });
  }
};

module.exports = requireAuth;
