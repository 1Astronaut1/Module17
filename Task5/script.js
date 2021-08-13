"use strict";
const btnSend = document.querySelector('#send'),
  btnGeo = document.querySelector('#geo'),
  input_field = document.querySelector('textarea'),
  messageList = document.querySelector('#chat_output');

let WS;
//открываем подключение
async function openSoket() {
  WS = new WebSocket('wss://echo.websocket.org/');
  WS.onopen = function () {
    console.log('Подключение успешно');
  }
  WS.onclose = function () {
    console.log('Подключение прервано');
  }
  WS.onmessage = function (message) {
    newChatMessage(message.data, 'flex-start');
  }
  WS.onerror = function (evt) {
    messageList.appendChild(evt)
  }
}
openSoket();
//вставляем новое сообщение
function newChatMessage(message, pos) {
  let element = document.createElement('div');
  element.classList.add('message');
  element.style.justifyContent = pos;
  element.innerHTML = `<div><p>${message}</p></div>`;
  messageList.appendChild(element);
}
//Находим местоположение пользователя(примерное)
async function getGeoData() {
  if (!'geolocation' in navigator) {
    alert('Ваш браузер не поддерживает гео-локацию')
  } else {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let positionLink = `https://www.openstreetmap.org/#map=17/${position.coords.latitude}/${position.coords.longitude}`;

      let element = document.createElement('div');
      element.classList.add("message")
      element.innerHTML = `<div><a href="${positionLink}">Гео-локация</a></div>`;
      element.style.justifyContent = 'flex-start';
      messageList.appendChild(element)
    }, () => {
      alert('Пожалуйста, дайте доступ к вашему местоположению.')
    })
  }
}
//Обрабатываем отправку
btnSend.addEventListener('click', () => {
  if (input_field.value) {
    input_field.style.borderBottom = '1px solid grey'
    let message = input_field.value;
    input_field.value = ''
    newChatMessage(message, 'flex-end');
    WS.send(message);
  } else {
    input_field.style.borderBottom = '2px solid red'
  }
})

btnGeo.addEventListener('click', () => {
  getGeoData()
})