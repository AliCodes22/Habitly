const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler, notFound } = require("./Middleware/errorMiddleware");
const { router } = require("./Routes/habitRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/habits", router);

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`server on ${port}`);
});
