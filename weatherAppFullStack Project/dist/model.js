class model {
    constructor() {
        this.cityData = []
    }

    async getCityData(cityName) {
        let newCity = await $.get(`/city/${cityName}`)
        this.cityData.push(newCity)
    }



    async getDataFromDB() {
        let stockData = await $.get("/cities")
        console.log(stockData)
        this.cityData = stockData
    }


    saveCity(cityName) {
        let save = this.cityData.find(c => c.name == cityName)
        console.log(cityName)
        $.post(`/city/`, save)
    }
    // removeCity(cityName) {
    //     console.log(cityName)
    //     $.delete('/city/', cityName)
        
    // }
    removeCity(cityName) {
        $.ajax({
            url: `/city/${cityName}`,
            type: 'DELETE',
            success: function (result) {}
            
        });
        }
    
    getData() {
        return this.cityData
    }
}

