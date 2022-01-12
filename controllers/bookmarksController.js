const express = require("express")
const bookmarks = express.Router()
const bookmarksArray = require("../models/bookmark.js")
const { validateURL } = require("../models/validations.js")

// bookmarks
bookmarks.get("/", (req, res) => {
    res.json(bookmarksArray)
})

// bookmarks/1
bookmarks.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if(bookmarksArray[arrayIndex]){
        res.json(bookmarksArray[arrayIndex])
    } else {
        res.status(404).json({ error: "Not found" })
    }
})

// /bookmarks
bookmarks.post("/", validateURL, (req, res) => {
    bookmarksArray.push(req.body)
    res.json(bookmarksArray[bookmarksArray.length - 1])
})

// /bookmarks/1
bookmarks.put("/:arrayIndex", validateURL, (req, res) => {
    const { arrayIndex } = req.params
    if(bookmarksArray[arrayIndex]){
        bookmarksArray[arrayIndex] = req.body
        res.status(200).json(bookmarksArray[arrayIndex])
    } else {
        res.redirect("/*")
    }
})

// /bookamrks/1
bookmarks.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if(bookmarksArray[arrayIndex]){
        const deletedBookmark = bookmarksArray.splice(arrayIndex, 1)
        res.status(200).json(deletedBookmark)
    } else {
        res.redirect("/*")
    }
})


module.exports = bookmarks