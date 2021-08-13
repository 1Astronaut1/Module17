NABRB = document.querySelector("button");
div = document.querySelector("div");
latitude = "I don`t know";
longitude = "I don`t know";

NABRB.style.height = NABRB.clientWidth + "px";
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        let pos = position;
        latitude = pos.coords.latitude
        longitude = pos.coords.longitude
    });
}
NABRB.onclick = function(event) {
    div.innerHTML += `<h1>HAHA! STUPID HUMAN! NOW I KNOW ALL ABOUT YOU! YOUR SCREEN WITH ${window.screen.width}, SCREEN HEIGHT ${window.screen.height}, YOU POSITION AT ${latitude} LATITUDE AND ${longitude} LONGITUDE.</h1>`;
};