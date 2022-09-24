const input = document.querySelector("input");
const headerBtns = document.querySelector(".header__btns");
const inputBtn = document.querySelector(".input-block__btn");
const ul = document.querySelector("ul");
const chooseAll = document.querySelector(".header__choose-all-btn");

chooseAll.addEventListener("click", (e) => {
  let checkboxes = document.querySelectorAll(".checkbox");
  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      checkboxes[i].checked = true;
      headerBtns.style.display = "block";
    }
  }
});

// headerbtns
headerBtns.addEventListener("click", (e) => {
  let checkboxes = document.querySelectorAll(".checkbox");
  if (e.target.classList.contains("header__delete-btn")) {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkboxes[i].parentElement.remove();
      }
    }
    headerBtns.style.display = "none";
    return;
  }
  if (e.target.classList.contains("header__cross-btn")) {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        // Можно было два раза написать previousElementSibling, но так короче
        checkboxes[i].parentElement.firstChild.classList.add("crossed");
      }
    }
    return;
  }
  if (e.target.classList.contains("header__clear-btn")) {
    headerBtns.style.display = "none";
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }
});
// Добавление кейса, кнопки delete, чекбокса
inputBtn.addEventListener("click", (e) => {
  // кейс
  let newCase = document.createElement("li");
  newCase.classList.add("case");
  let newCaseText = document.createElement("p");
  newCaseText.innerHTML = input.value;
  newCaseText.classList.add("case__text");
  ul.append(newCase);
  newCase.append(newCaseText);
  // кнопка
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("delete-btn");
  let liCollection = document.querySelectorAll("li");
  let liLast = liCollection[liCollection.length - 1];
  liLast.append(deleteBtn);
  // checkbox
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.classList.add("checkbox");
  liLast.append(checkBox);
});
// Перечеркивание, удаление, отображение кнопок хедера
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("case__text")) {
    e.target.classList.toggle("crossed");
    return;
  }
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    // отсутствие return тут необходимо
  }
  let checkboxes = document.querySelectorAll(".checkbox");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      headerBtns.style.display = "block";
      return;
    } else headerBtns.style.display = "none";
  }
});
