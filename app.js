const express = require("express")
const cors = require("cors")
const app = express()
const bookmarksController = require("./controllers/bookmarksController.js")

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log("This code runs for every request")
    next()
})

app.get("/", (req, res) => {
    res.send("Welcome to Bookmarks App!")
})

app.use("/bookmarks", bookmarksController)

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
})

module.exports = app