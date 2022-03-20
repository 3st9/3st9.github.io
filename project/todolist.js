const toDoListForm = document.querySelector("#toDoListForm");
const toDoListInput = toDoListForm.querySelector("input");
const toDoList = document.querySelector("#toDoList");

let savingToDos = [];
const TODOS_KEY = "toDos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(savingToDos));
}

function handleToDoList(event) {
    event.preventDefault();
    const toDo = toDoListInput.value;
    toDoListInput.value = "";
    const newToDoObject = {
        id:Date.now(),
        text:toDo
    };
    paintToDoList(newToDoObject);
    savingToDos.push(newToDoObject);
    saveToDos();
}

function paintToDoList(toDo) {
    const li = document.createElement("li");
    li.id = toDo.id;
    const span = document.createElement("span");
    span.innerHTML = toDo.text;
    const btn = document.createElement("button");
    btn.innerHTML = "✔";
    btn.addEventListener("click",deleteTodo);
    li.appendChild(btn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    console.log(savingToDos,li);
    savingToDos = savingToDos.filter((object) => object.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

toDoListForm.addEventListener("submit",handleToDoList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDoList);
    savingToDos = parsedToDos;
}

