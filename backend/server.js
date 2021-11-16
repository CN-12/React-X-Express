const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
app.use(express.json());
var cors = require("cors");
app.use(cors());

app.listen(port, function () {
  console.log(`Listening on http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname , "/frontend/build/index.html"));
});
