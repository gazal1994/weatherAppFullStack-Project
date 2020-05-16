

class Renderer {
    constructor() {
    }

  

    renderDataFromDB(newData) {
        $(".dataFromDB-container").empty()
        const source = $('#DataFromDB-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({data:newData});
      //  console.log(newdata)
        $(".dataFromDB-container").append(newHTML);
       
        
    }
   
 

}