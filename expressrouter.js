const express = require("express");
const app = express();
const port = 8000;
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("hello router");
});
app.use("/orders", router);

app.listen(port, function() {
    console.log(`App has started on port ${port}`)
})