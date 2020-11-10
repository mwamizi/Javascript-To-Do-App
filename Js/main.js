const form = document.querySelector(".form");
const todoInput = document.querySelector("#todo");
const TodoList = document.querySelector(".todoList");

form.addEventListener("submit", addTodos);
TodoList.addEventListener("click", deleteTodo);

function addTodos(e) {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    todoInput.value.trim() === "";
  } else {
    //Todo List Element
    // Trash Button
    const trashButton = document.createElement("div");
    trashButton.className = "trashBtn";
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    // check Button
    const checkButton = document.createElement("div");
    checkButton.className = "checkBtn";
    checkButton.innerHTML = '<i class="fa fa-check-circle"></i>';

    const todoText = document.createTextNode(todoInput.value);
    const div = document.createElement("div");
    div.className = "check";
    div.appendChild(checkButton);
    div.appendChild(todoText);
    // List Element
    const li = document.createElement("li");
    li.appendChild(div);
    li.appendChild(trashButton);
    // Todo List Element append Child
    TodoList.appendChild(li);

    //
    todoInput.value = "";
  }
}

function deleteTodo(e) {
  if (e.target.classList.contains("fa-check-circle")) {
    const parentLi = e.target.parentElement.parentElement;
    parentLi.classList.toggle("checkbt");
    e.target.parentElement.classList.toggle("checkBtnColor");
  }
  if (e.target.classList.contains("fa-trash")) {
    const parentLi = e.target.parentElement.parentElement;
    parentLi.remove();
  }
}
