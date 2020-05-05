const express = require('express')
const comicModel = require('../models/comic.js')

const comicRouter = express.Router()

// GET ALL Route
comicRouter.get('/', (req, res) => {
    comicModel.getAllComics()
        .then((allComics) => {
            res.render('comic/allComics', {allComics})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE NEW COMIC FORM
comicRouter.get('/new', (req, res) => {
    res.render('comic/createComic')
})

// EDIT COMIC FORM
comicRouter.get('/:id/edit', (req, res) => {
     comicModel.getOneComic(req.params.id)
        .then((singleComic) => {
            res.render('comic/editComic', {singleComic})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// GET ONE
comicRouter.get('/:id', (req, res) => {
    comicModel.getOneComic(req.params.id)
        .then((singleComic) => {
            res.render('comic/singleComic', {singleComic})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE
comicRouter.post('/', (req, res) => {
    comicModel.createComic(req.body)
        .then(() => {
            res.redirect('/comic')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
comicRouter.put('/:id', (req, res) => {
    comicModel.updateComic(req.params.id, req.body)
        .then(() => {
            res.redirect(`/comic/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// DELETE
comicRouter.delete('/:id', (req, res) =>{
    comicModel.deleteComic(req.params.id)
        .then(() => {
            res.redirect('/comic')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


module.exports = comicRouter