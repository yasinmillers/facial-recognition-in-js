const express = require("express");
const bodyparsar = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyparsar.json());
app.use(bodyparsar.urlencoded({ extended: true }));
app.route("/orders")

.get((req, res) => {
    res.json({ message: "hello me here" })
})

.post((req, res) => {
    const body = req.body;
    const amount = body.amount;
    const adress = body.adress;
    res.json({ amount, adress });
})
app.listen(port, function() {
    console.log(`App has started on port ${port}`)
})