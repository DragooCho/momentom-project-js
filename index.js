// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// function handleClick() {
//   const currentClass = title.className;
//   if (currentClass !== CLICKED_CLASS) {
//     title.className = CLICKED_CLASS;
//   } else {
//     title.className = "";
//   }
// }

// function init() {
//   title.addEventListener("click", handleClick);
// }

// init();

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
// 내장함수를 이용.
// !는 반대를 의미한다. !==은 같지않다는 뜻이다.

// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// function handleClick() {
//   title.classList.toggle(CLICKED_CLASS);
// }

// function init() {
//   title.addEventListener("click", handleClick);
// }

// init();
