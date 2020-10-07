const express = require('express')
const app = express()
const port = 3000

let Transports = require('./models/transports');

// Templating
app.set("view engine", "ejs");
app.set("trust proxy", 1);

/**
 * Get all transports data
 */
app.get("/", (req, res) => {
    res.render("./../client/base.ejs");
});

/**
 * Create Transport Item
 */

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
