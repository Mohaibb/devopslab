const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from my DevOps Lab App Service on Azure! 🚀");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
