var locator = "Manalapan";

var homeLocation = [40.286017, -74.311372];
var lat = homeLocation[0];
var lon = homeLocation[1];

var url_1 = "http://api.openweathermap.org/data/2.5/weather?q=" + locator + "&appid=240319ac01dfdcb21cb6c88f1fdc3095";

var url_2 = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=240319ac01dfdcb21cb6c88f1fdc3095";

function displayWeather(weatherObj) {

    var type = weatherObj.weather[0].main;
    
    console.log(type);
    

    //GET IMAGES OF CLOUDS, SUN, RAIN, WIND, SNOW, ETC
    //POPULATE THE AREA BELOW THE DATE WITH THE PIC
    
    var weatherIcon = document.getElementById("weathericon");
    var weatherIconSize = "40px";

    validNames = ["Rain", "Clouds", "Mist", "Snow"];
    
    if (validNames.includes(type)){
        weatherIcon.setAttribute("src", type+".png");
    }   
    else{
        weatherIcon.setAttribute("src", "questionmark.png");
    } 
    
    weatherIcon.setAttribute("height", weatherIconSize);
    weatherIcon.setAttribute("width", weatherIconSize);
    
} //end displayWeather

function KelvinToFahrenheit(k) {
    return (k - 273) * 9 / 5 + 32;
}

function displayTemperature(weatherObj) {
    //extract the desired data from the object
    var temperature = weatherObj.main.temp;

    //transform it into desired format
    temperature = Math.floor(KelvinToFahrenheit(temperature));

    //load it into an element
    var temperatureElement = document.getElementById("tempspan");
    temperatureElement.innerHTML += temperature + "\xB0F"; //thats the degree symbol in hex
}

function getWeatherData(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            var weatherObj = JSON.parse(this.response);
            displayWeather(weatherObj);
            displayTemperature(weatherObj);
        }
    }

    request.open("GET", url_2); //use the lat&long version
    request.send();
}

getWeatherData();

setInterval(getWeatherData, 1000000);