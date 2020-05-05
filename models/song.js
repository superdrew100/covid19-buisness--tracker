const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const songSchema = new Schema({
    name: String,
    address: String,
    hours: String,
    tpStock: Number,
    paymentTypes: String,
})

const songCollection = mongoose.model('song', songSchema)

// GET/READ ALL
function getAllSongs() {
    return songCollection.find()
}

// GET/READ ONE
function getOneSong(id) {
    return songCollection.findById(id)
}

// CREATE
function createSong(newSong) {
    return songCollection.create(newSong)
}

// UPDATE
function updateSong(id, newSong) {
    return songCollection.findByIdAndUpdate(id, newSong)
}

// DELETE
function deleteSong(id) {
    return songCollection.findByIdAndDelete(id)
}


module.exports = {
    getOneSong,
    getAllSongs,
    createSong,
    updateSong,
    deleteSong
}