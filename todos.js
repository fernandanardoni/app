var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = "";

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode('  Done');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
   var todoText = inputElement.value;

   todos.push(todoText);
   inputElement.value = "";
   renderTodos();
   saveToStorage();

}

todoText.style.color = "#d3d3d3";

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {

    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function darkModeOn() {
   document.querySelector('body').style.backgroundColor="#202024";
   document.querySelector('#app').style.backgroundColor="#d3d3d3";
   inputElement.style.backgroundColor="#d3d3d3";
   inputElement.style.color="#202024";
   document.querySelector('h1').style.color="#202024";
}

function darkModeOff() {
   document.querySelector('body').style.backgroundColor="#d3d3d3";
   document.querySelector('#app').style.backgroundColor="#202024";
   inputElement.style.backgroundColor="#202024";
   inputElement.style.color="#d3d3d3";
   document.querySelector('h1').style.color="#d3d3d3";
}