const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs");
app.set("trust proxy", 1);

app.get("/", (req, res) => {
    res.render("./../client/index.ejs");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})