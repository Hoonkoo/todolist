const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("gg");
});

app.listen(3000, () => {
  console.log("open");
});
