const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { router } = require("./Routes/habitRoutes");

const app = express();

app.use("/api/habits", router);

app.get("/", (req, res) => {
  res.json({
    message: "get habits",
  });
});

app.listen(port, () => {
  console.log(`server on ${port}`);
});
