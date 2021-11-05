const express = require("express");
const app = express();
const PORT = 8000;
const router = express.Router();
const axios = require("axios")
const cheerio = require("cheerio")

router.get("/yes", (req, res, next) => {
    res.send("hello router");
});
app.use("/orders", router);

const articles = []

app.get("/", (req, res) => {
    res.json("welcome to climate news API")
})

app.get("/news", (req, res) => {
    axios.get("https://www.theguardian.com/environment/climate-crisis")
        .then((res) => {
            const html = res.data
            const $ = cheerio.load(html)

            $('a:contains("climate")', html).each(function() {
                const title = $(this).text()
                const url = $(this).atrr('href')
                articles.push({
                    title,
                    url
                })

            })
            res.json(articles)
        }).catch((err) => console.log(err))
})



app.listen(PORT, function() {
    console.log(`App has started on port ${PORT}`)
})