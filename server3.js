const express = require("express");
const app = express();
const port = 8000;

app.get(function(req, res) {
    res.send("This a get request");
})
app.listen(port)