console.log("HELLURRRR")

const api_key = "c4a2178442e6f17ce75f7c3388ce7816"
//newkey ="f074e6a832a60e02f541f65baeb7c5e2"

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

    var theInput = $(".city")[0]

    var theClick = $(".cityBtn")[0]

    $(theClick).on("click", function(){
        city = $(theInput).val()
        api_url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + api_key
        console.log(api_url)
        getapi(api_url);
    })

    $(".date").on("click",function(){
       
       //creating variables to get value out of inputs
        let year = $(".year").val()
        let month = $(".month").val()
        let day = $(".day").val()

        //creating date string 
        var userDate = year + "." + month + "." + day 

        //passing date string into variable based on desired date
        var date = new Date(userDate);

        //converting year/month/day into UNIXXXX
        var unixTimeStamp = Math.floor(date.getTime() / 1000);
        
        //display 
        console.log(unixTimeStamp)
    })
});

//start=1369728000
//end=1369789200

//http://history.openweathermap.org/data/2.5/history/city?lat=43&lon=-89&type=hour&start=1369728000&appid=f074e6a832a60e02f541f65baeb7c5e2

