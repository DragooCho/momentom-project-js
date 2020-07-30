const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `안녕하세요 ${text}님`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

// 자바 스크립트에는 내장 된 init() 함수가 없습니다. 즉, 언어의 일부가 아닙니다.
// 하지만 개별 프로그래머가 초기화 절차를 위해
// 자신의 init() 함수를 만드는 것은 드문 일이 아닙니다 (많은 언어에서).

// 특정 init() 전체 웹 페이지를 초기화하는 데 함수를 사용할 수 있습니다.
// 이 경우 document.ready 또는 onload 처리에서 호출되거나
// 특정 유형의 객체를 초기화 할 수 있습니다. 또는 ... well , 당신 이름.

// 어떤 주어진 init()은 특별히 그것을 작성한 사람이해야하는 모든 것까지입니다.
// 일부 유형의 코드는 초기화가 필요하지 않습니다.
