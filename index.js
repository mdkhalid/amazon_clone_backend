// include library
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT;

//middleware
app.use(cors());
app.use(morgan("dev"));

//routes

app.get("/", async (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Amazon clone REST API home page.",
  });
});

//start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
