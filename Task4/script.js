Button = document.querySelector("button");
time_zone = document.querySelector("#time_zone");
date_time = document.querySelector("#date_time");
Button.onclick = function(event) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            let pos = position;
            fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${position.coords.latitude}&long=${position.coords.longitude}`)
            .then((timeApi) => {return timeApi.json()})
            .then((timeApi)=>{
                time_zone.value = `Часовой пояс: ${timeApi.timezone}`;
                date_time.value = `Местное время: ${timeApi.date_time_txt}`;
            })
        });
    }
};