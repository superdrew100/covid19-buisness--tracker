const express = require('express')
const facilityModel = require('../models/facility.js')

const facilityRouter = express.Router()

// GET ALL Route
facilityRouter.get('/', (req, res) => {
    facilityModel.getAllFacilities()
        .then((allFacilities) => {
            res.render('facility/allFacilities', {allFacilities})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE NEW FACILITY FORM
facilityRouter.get('/new', (req, res) => {
    res.render('facility/createFacility')
})

// EDIT FACILITY FORM
facilityRouter.get('/:id/edit', (req, res) => {
     facilityModel.getOneFacility(req.params.id)
        .then((singleFacility) => {
            res.render('facility/editFacility', {singleFacility})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// GET ONE
facilityRouter.get('/:id', (req, res) => {
    facilityModel.getOneFacility(req.params.id)
        .then((singleFacility) => {
            res.render('facility/singleFacility', {singleFacility})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE
facilityRouter.post('/', (req, res) => {
    facilityModel.createFacility(req.body)
        .then(() => {
            res.redirect('/facility')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
facilityRouter.put('/:id', (req, res) => {
    facilityModel.updateFacility(req.params.id, req.body)
        .then(() => {
            res.redirect(`/facility/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// DELETE
facilityRouter.delete('/:id', (req, res) =>{
    facilityModel.deleteFacility(req.params.id)
        .then(() => {
            res.redirect('/facility')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


module.exports = facilityRouter