const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Hello from a container!";

app.get("/", (req, res) => {
  res.send(MESSAGE);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
