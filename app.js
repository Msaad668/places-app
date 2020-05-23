const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello");
});

PORT = 3000;

app.listen(PORT, () => {
  console.log(`serverstarted on port ${PORT}`);
});
