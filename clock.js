const clockContaner = document.querySelector(".js-clock"),
  clockTitle = clockContaner.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// `${hours < 10 ? `0${hours}` : hours}:$에서
// hours < 10 ? ---- 10보다 시간이 작다면 ?
// `0${hours}`------ 0이 시간앞에 붙여라
// : hours  ---------아니면  시간만(hours) 표시해라.

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
