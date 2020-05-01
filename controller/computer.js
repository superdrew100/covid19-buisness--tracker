const express = require('express')
const computerModel = require('../models/computer.js')

const computerRouter = express.Router()

// GET ALL Route
computerRouter.get('/', (req, res) => {
    computerModel.getAllComputers()
        .then((allComputers) => {
            res.render('computer/allComputers', {allComputers})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE NEW COMPUTER FORM
computerRouter.get('/new', (req, res) => {
    res.render('computer/createComputer')
})

// EDIT COMPUTER FORM
computerRouter.get('/:id/edit', (req, res) => {
     computerModel.getOneComputer(req.params.id)
        .then((singleComputer) => {
            res.render('computer/editComputer', {singleComputer})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// GET ONE
computerRouter.get('/:id', (req, res) => {
    computerModel.getOneComputer(req.params.id)
        .then((singleComputer) => {
            res.render('computer/singleComputer', {singleComputer})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE
computerRouter.post('/', (req, res) => {
    computerModel.createComputer(req.body)
        .then(() => {
            res.redirect('/computer')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
computerRouter.put('/:id', (req, res) => {
    computerModel.updateComputer(req.params.id, req.body)
        .then(() => {
            res.redirect(`/computer/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// DELETE
computerRouter.delete('/:id', (req, res) =>{
    computerModel.deleteComputer(req.params.id)
        .then(() => {
            res.redirect('/computer')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


module.exports = computerRouter