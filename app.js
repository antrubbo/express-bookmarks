const express = require("express")
const app = express()
const bookmarksController = require("./controllers/bookmarksController.js")

app.use("/bookmarks", bookmarksController)

app.get("/", (req, res) => {
    res.send("Welcome to Bookmarks App!")
})

module.exports = app