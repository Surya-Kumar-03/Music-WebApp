const express = require("express");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi, I am running!");
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server Up and Running!");
});
