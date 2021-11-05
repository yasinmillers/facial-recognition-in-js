const express = require("express");
const path = require("path");
const app = express();
const { FaceMatcher } = require("face-api.js");
const faceapi = require("face-api.js")
const port = 5000;

const basePath = path.join(__dirname, "../public")

app.use(express.static(basePath))
app.listen(port, () => {
    console.log(`server started on port ${port}`)
})