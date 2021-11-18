const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.rjy7d.mongodb.net/react?retryWrites=true&w=majority",
  function (err, client) {
    if (err) return console.log(err);

    var db = client.db("react");
    app.listen(port, function () {
      console.log(`listening on ${port}`);
    });
  }
);

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/", function (res, req) {
  req.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.get("*", function (res, req) {
  req.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.post("/post", function (res, req) {
  var info = {
    아디: req.body.id,
    비번: req.body.pw,
  };
  db.collection("post").insert(info, function (err, res) {
    if (err) return err;
    console.log("저장 완료");
  });
  location.href = "/ok";
});
