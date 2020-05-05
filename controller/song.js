const express = require('express')
const songModel = require('../models/song.js')

const songRouter = express.Router()

// GET ALL Route
songRouter.get('/', (req, res) => {
    songModel.getAllSongs()
        .then((allSongs) => {
            res.render('song/allSongs', {allSongs})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE NEW Song FORM
songRouter.get('/new', (req, res) => {
    res.render('song/createSong')
})

// EDIT Song FORM
songRouter.get('/:id/edit', (req, res) => {
     songModel.getOneSong(req.params.id)
        .then((singleSong) => {
            res.render('song/editSong', {singleSong})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// GET ONE
songRouter.get('/:id', (req, res) => {
    songModel.getOneSong(req.params.id)
        .then((singleSong) => {
            res.render('song/singleSong', {singleSong})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE
songRouter.post('/', (req, res) => {
    songModel.createSong(req.body)
        .then(() => {
            res.redirect('/song')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
songRouter.put('/:id', (req, res) => {
    songModel.updateSong(req.params.id, req.body)
        .then(() => {
            res.redirect(`/song/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// DELETE
songRouter.delete('/:id', (req, res) =>{
    songModel.deleteSong(req.params.id)
        .then(() => {
            res.redirect('/song')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


module.exports = songRouter