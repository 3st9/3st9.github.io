function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const APIKEY = "13e2f0a18dcbfcb6858e3b7a096d9f3b"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data =>{
        const weather = document.querySelector("#weather span:nth-child(1)")
        const temp = document.querySelector("#weather span:nth-child(2)")
        const city = document.querySelector("#weather span:nth-child(3)")
        weather.innerHTML = data.weather[0].main;
        temp.innerHTML = `${data.main.temp}℃,`; 
        city.innerHTML = data.name;
    });
}
function onGeoError() {
    alert("We can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);
