const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.rjy7d.mongodb.net/react?retryWrites=true&w=majority",
  function (err, client) {
    if (err) return console.log(err);

    db = client.db("react");
    app.listen(port, function () {
      console.log(`listening on ${port}`);
    });
  }
);


app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/", function (res, req) {
  // console.log(__dirname);
  req.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.get("*", function (res, req) {
  // console.log(__dirname);
  req.sendFile(path.join(__dirname, "frontend/build/index.html"));
});
