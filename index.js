const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello ikram!");
});

app.listen(port, () => {
  console.log(`Example app  on port ${port}`);
});
