const express = require("express");
const app = express();
const port = 5000;

const usermiddleware = (req, res, next) => {
    console.log(`the requst method is ${req.method}`);
    console.log(`the requst param is ${req.params.id}`);
    console.log(`the requst path is ${req.path}`);


    next();
};
app.get("/user/:id", usermiddleware);

app.listen(port, function() {
    console.log(`App has started on port ${port}`)
})