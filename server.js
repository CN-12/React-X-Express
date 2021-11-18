const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
// const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.rjy7d.mongodb.net/react?retryWrites=true&w=majority",
  function (err, client) {
    if (err) return console.log(err);

    db = client.db("react");
    app.listen(port, function () {
      console.log(`listening on http://localhost:${port}`);
    });
  }
);

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.post("/add", function (req, res) {
  var info = {
    할일: req.body.title,
    날짜: req.body.date,
  };
  db.collection("post").insertOne(info, function (err, res) {
    if (err) return err;
    console.log("저장 완료");
    console.log(req.body.title);
    console.log(req.body.date);
  });
  res.send("ok");
});
