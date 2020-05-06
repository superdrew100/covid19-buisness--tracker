const express = require('express')
const methodOverride = require('method-override')

const songRouter = require('./controller/song.js')
const comicRouter = require('./controller/comic.js')
const computerRouter = require('./controller/computer.js')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.json('ok')
})

app.use('/song', songRouter)
app.use('/comic', comicRouter)
app.use('/computer', computerRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})