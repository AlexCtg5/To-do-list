let list = [];

function renderToDoList() {
  const listContainer = document.querySelector(".list-order");
  let todolistHTML = "";

  list.forEach((toDo, i) => {
    const checkBtnClass =
      toDo.pressed === 0 ? "check-btn" : "check-btn-pressed";

    const listItemHTML = `
      <li class="item-list">
        <button class="${checkBtnClass}" onclick="doneIt(${i})"></button>
        <p class="item-text">${toDo.text}</p>
        <img src="images/bin.png" class="deleteButton" onclick="list.splice(${i}, 1);renderToDoList()" />
        <hr class="hr" />
      </li>
    `;

    todolistHTML += listItemHTML;
  });

  listContainer.innerHTML = todolistHTML;
}

function addToDo() {
  let inputText = document.querySelector(".input");
  let activity = inputText.value;
  if (activity !== "") {
    list.push({
      text: activity,
      pressed: 0,
    });
    inputText.value = "";
    renderToDoList();
  } else {
    alert("You need to write something");
  }
}

function doneIt(index) {
  const btn = document.querySelectorAll(".check-btn");
  const toDo = list[index];

  if (toDo.pressed === 0) {
    btn[index].classList.add("check-btn-pressed");
    toDo.pressed = 1;
  } else {
    btn[index].classList.remove("check-btn-pressed");
    toDo.pressed = 0;
  }
}
