const express = require('express')
const router = express.Router()
const urllib = require('urllib')

const weather = require('./../model/city')


// router.delete('/city/', function (request, response) {
//     let cityName = request.body
//    console.log(cityName)
//     weather.deleteOne({
//         name: `${cityName}`
//     },
//         function (req, res) {

//             response.send("delete")
//         })
// })

router.delete('/city/:cityName', function (request, response) {
    let cityName = request.params.cityName

    weather.deleteOne({
        name: `${cityName}`
    },
        function (req, res) {

            response.send("delete")
        })
})

router.get('/city/:cityName', function (request, response) {

    let cityName = request.params.cityName
    urllib.request(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=e03dccaae1d66d282c9943f719d629f2
    `, function (err, data, res) {
        const cityData = JSON.parse(data);
        let icon = cityData.weather[0].icon
        console.log(icon)
        const mewIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`
        let newW = ({
            name: cityName,
            temperature:  Math.floor(cityData.main.temp) ,
            condition: cityData.weather[0].description,
            conditionPic: mewIcon,
            saved : false

        })
        response.send(newW)
    })
})




router.post(`/city`, function (request, response) {
    let newCity = request.body
    console.log(newCity)
    let w1 = new weather({
        name: newCity.name,
        temperature: newCity.temperature,
        condition: newCity.condition,
        conditionPic: newCity.conditionPic,
        saved : true
    })
    console.log(w1)
    w1.save().then(a => response.send(w1))
})

router.get('/cities', function (req, res) {
    weather.find({}).then(function (weather) {
        res.send(weather)
    })
})

module.exports = router
