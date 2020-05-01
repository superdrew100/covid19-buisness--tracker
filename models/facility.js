const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const facilitySchema = new Schema({
    name: String,
    address: String,
    hours: String,
    tpStock: Number,
    paymentTypes: String,
})

const facilityCollection = mongoose.model('facility', facilitySchema)

// GET/READ ALL
function getAllFacilities() {
    return facilityCollection.find()
}

// GET/READ ONE
function getOneFacility(id) {
    return facilityCollection.findById(id)
}

// CREATE
function createFacility(newFacility) {
    return facilityCollection.create(newFacility)
}

// UPDATE
function updateFacility(id, newFacility) {
    return facilityCollection.findByIdAndUpdate(id, newFacility)
}

// DELETE
function deleteFacility(id) {
    return facilityCollection.findByIdAndDelete(id)
}


module.exports = {
    getOneFacility,
    getAllFacilities,
    createFacility,
    updateFacility,
    deleteFacility
}