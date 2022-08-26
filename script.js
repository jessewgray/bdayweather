console.log("HELLURRRR")

const api_key = "c4a2178442e6f17ce75f7c3388ce7816"

let city = ""

let api_url = ""

//const api_url = "https://catfact.ninja/breeds";


console.log(api_url)


// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    let lat = Math.floor(data[0].lat);
    let lon = Math.floor(data[0].lon);
   
const returnDiv = $(".return")[0]

$(returnDiv).append("<p>" + lat + "</p>") 
$(returnDiv).append("<p>" + lon + "</p>") 
}

$( document ).ready(function() {
    console.log( "ready!" );

    var theInput = $("input")[0]

    var theClick = $("button")[0]

    $(theClick).on("click", function(){
        city = $(theInput).val()
        api_url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + api_key
        console.log(api_url)
        getapi(api_url);
    })
});

