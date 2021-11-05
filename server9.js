const express = require("express");
const app = express();
const port = 5000;
const router = express.Router();
app.use(router);
//using a middle ware with a router 
const datemiddleware = (req, res, next) => {
    console.log(`the curent is${Date.now()}`);
    res.send(`the curent is${Date.now()}`);

    next();
};
// middle ware for errors 
const erormiddleware = (req, res, next) => {

        console.error(err.stack);
        res.status(500).send("errorfound")
    }
    // app.use(datemiddleware);
router.get("/home", datemiddleware);



app.listen(port, function() {
    console.log(`App has started on port ${port}`)
})