/*jshint esversion: 6 */
/*globals console */

var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET method route
app.get("/", function (req, res) {
    res.send("Home Get");
});

// POST method route
app.post("/", function (req, res) {
    var data = req.body;

    console.log(`User: ${data.user} - Email ${data.mail}`)
});

app.listen(2705, function () {
    console.log("Server is running on port: " + 2705);
});