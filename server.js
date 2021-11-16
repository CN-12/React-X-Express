const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

app.listen(port, function () {
  console.log(`listening on http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/", function (res, req) {
  // console.log(__dirname);
  req.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.get("*", function (res, req) {
  // console.log(__dirname);
  req.sendFile(path.join(__dirname, "frontend/build/index.html"));
});
