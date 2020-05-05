const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const comicSchema = new Schema({
    name: String,
    Writer: String,
    artist: String,
    issueNumber: Number,
    publisher: String,
})

const comicCollection = mongoose.model('comic', comicSchema)

// GET/READ ALL
function getAllComics() {
    return comicCollection.find()
}

// GET/READ ONE
function getOneComic(id) {
    return comicCollection.findById(id)
}

// CREATE
function createComic(newComic) {
    return comicCollection.create(newComic)
}

// UPDATE
function updateComic(id, newComic) {
    return comicCollection.findByIdAndUpdate(id, newComic)
}

// DELETE
function deleteComic(id) {
    return comicCollection.findByIdAndDelete(id)
}


module.exports = {
    getOneComic,
    getAllComics,
    createComic,
    updateComic,
    deleteComic
}