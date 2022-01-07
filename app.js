const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to Bookmarks App!")
})

module.exports = app