
const apimodel = new model()
const renderer = new Renderer()


$(document).ready( async function() {

    await apimodel.getDataFromDB()
    renderer.renderDataFromDB(apimodel.cityData)
  });

// $("#delete").on("click", async function () {
//   await  apimodel.getCityData(paris)
//     console.log("gazal")
//   })
$("#load-data").on("click", async function () {
    let text = $("#inputCity").val()
   await  apimodel.getCityData(text)
    console.log(text)
    renderer.renderDataFromDB(apimodel.cityData)
  
  })

  $(".dataFromDB-container").on('click', ".delete",  async function () {
    let cityData = $(this).closest("div.city-data").find("p.name-n").text()
    let city = cityData.split(" ",1)
    console.log(city)
    await  apimodel.removeCity(city[0])
    await apimodel.getDataFromDB()
    renderer.renderDataFromDB(apimodel.cityData)
})
  $(".dataFromDB-container").on('click', ".add",  async function () {
    let cityData = $(this).closest("div.city-data").find("p.name-n").text()
    let city = cityData.split(" ",1)
    await  apimodel.saveCity(city[0])
    console.log(city[0])
    await apimodel.getDataFromDB()
    renderer.renderDataFromDB(apimodel.cityData)
    
  
})

 
