const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

const http = require("http").createServer(app);
http.listen(port, function () {
  console.log(`Listening on http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "frontend/build/")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
