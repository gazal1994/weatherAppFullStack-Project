const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weatherSchema = new Schema({
    name:  String,
    temperature: Number,
    condition: String,
    conditionPic : String,
    saved : false
})

const weather = mongoose.model("weather", weatherSchema)
module.exports = weather
