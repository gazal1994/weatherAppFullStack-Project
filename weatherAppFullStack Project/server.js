// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser = require('body-parser')
const path = require('path');

// Mongoose setup
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/weathereDB', { useNewUrlParser: true })

app.use('/', api)


const port = 3200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
