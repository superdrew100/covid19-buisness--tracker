const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const computerSchema = new Schema({
    name: String,
    modelNumber: String,
    manufacturer: String,
    version: Number,
    storage: String,
})

const computerCollection = mongoose.model('computer', computerSchema)

// GET/READ ALL
function getAllComputers() {
    return computerCollection.find()
}

// GET/READ ONE
function getOneComputer(id) {
    return computerCollection.findById(id)
}

// CREATE
function createComputer(newComputer) {
    return computerCollection.create(newComputer)
}

// UPDATE
function updateComputer(id, newComputer) {
    return computerCollection.findByIdAndUpdate(id, newComputer)
}

// DELETE
function deleteComputer(id) {
    return computerCollection.findByIdAndDelete(id)
}


module.exports = {
    getOneComputer,
    getAllComputers,
    createComputer,
    updateComputer,
    deleteComputer
}