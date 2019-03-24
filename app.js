//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

app.get("/", function (req, res) {
  res.render("index", {
    title: "Welcome to the Tip calculator"
  });
});

app.post("/", function (req, res) {
  let bill = req.body.bill;
  let tip = req.body.tip;
  let tipPercent = tip / 100;
  let tipTotal = bill * tipPercent;
  let total = parseFloat(bill) + tipTotal;


  res.render("results", {
    title: "Results",
    tip: tipTotal.toFixed(2),
    total: total.toFixed(2)
  });
});