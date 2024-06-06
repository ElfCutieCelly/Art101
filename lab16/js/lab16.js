//Celeste Hernandez
//June 6


var URL = "";



var URLpre = "";
var URLpost ="";

 // Using the core $.ajax() method
 $.ajax({
    // The URL for the request (Efrom the api docs)
    url:URL, 
    // the data to send (will be converte to a query string)
    data: {
        //here is where any data required by the api 
        //goes (check the apir docs)
        id:614,
        api_key: "",
    },
    //Whether this is a Post or GEt request
    type: "GET",
    //The type of data we expect back
    dataType : "json",
    //What do we do when tha pi call is successful
    // all the action goes in here
    success: function(data){
        //do stuff
        console.log(data);

    }
    //what we do if the api call fails 
    // error:function (jqXHR, textStatues, errorThrown) {
        // do stuff
        //console.log("Error:", text Statues, errorThrown):
    //} 
    
})
