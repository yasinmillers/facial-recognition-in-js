const express = require("express");
const app = express();
const port = 5000;

app.get("/", function(req, res) {
    res.send("hello from express")

});

app.get("/about", function(req, res) {
    res.send("<h1>about us </h1><br>seen on about us")

});

app.listen(port, () => {
    console.log(`express app is runing on port ${port}`)
});