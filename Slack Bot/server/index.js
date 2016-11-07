/*jshint esversion: 6 */
/*globals console */

var express = require("express");
var app = express();

// GET method route
app.get("/", function (req, res) {
    res.send("Home Get");
});

// POST method route
app.post("/", function (req, res) {
    console.log(req.body);
    console.log(res.body);
});

app.listen(2705, function () {
    console.log("Server is running on port: " + 2705);
});