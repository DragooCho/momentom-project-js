const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
//writing no.1

const TODOS_LS = "toDos";
// writing no.4
// const TODOS_LS = "toDos"는
// 단지 문자열을 유지하는 것입니다.
// "ToDos"는 문자열입니다.
// ToDos는 할일 배열을 보유하는 변수입니다.

function paintToDo(text) {
  const li = document.createElement("li");
  //writing no.4
  //document.createElement는 현 html에 없는 테그,클래스를 생성해준다.
  //button의 영역을 설정해주고 그 영역에 이모지를 삽입하는 과정을 보여준다.
  const delbtn = document.createElement("button");
  delbtn.innerHTML = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delbtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  // writeing no.3
  if (toDos !== null) {
    // writing no.4
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  // writing no.5
}

init();

// init();
// function init() {
//     loadToDos();
// writing no.2
