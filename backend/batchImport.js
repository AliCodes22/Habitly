const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const habits = require("./data/habits.json");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const migrateData = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("habitly");
    await db.collection("entries").insertMany(habits);
  } catch (err) {
    console.log(err.message);
  }
};

migrateData();
