const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

const basePath = path.join(__dirname, "../public")

app.use(express.static(basePath))
app.listen(port, () => {
    console.log(`server started on port ${port}`)
})