const express = require('express')
const facilityRouter = require('./controller/facility.js')
const comicRouter = require('./controller/comic.js')
const computerRouter = require('./controller/computer.js')
const methodOverride = require('method-override')

const app = express()
const port = 3000

app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.json('ok')
})

app.use('/facility', facilityRouter)
app.use('/comic', comicRouter)
app.use('/computer', computerRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})