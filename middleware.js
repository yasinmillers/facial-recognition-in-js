const express = require("express");
const app = express();
const port = 5000;

const datemiddleware = (req, res, next) => {
    console.log(`the curent is${Date.now()}`);

    next();
};
app.use(datemiddleware);

app.listen(port, function() {
    console.log(`App has started on port ${port}`)
})