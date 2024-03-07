const todoInput = document.querySelector('#todo-input');
const list = document.querySelector('.list');

const todo = [];

// Render Todo

function renderTodo(){
    list.innerHTML = '';
    for (let i = 0; i < todo.length; i++) {
        list.innerHTML += `<li>${todo[i]}
        <button class="del-button" onclick="deleteTodo(${i})"><i class="fa-solid fa-trash-can"></i></button>
        <button class="del-button" onclick="editTodo(${i})"><i class="fa-solid fa-pen"></i></button>
        </li>`
     
    }
}


// Add Todo

function addTodo(){
    todo.push(todoInput.value);
    console.log(todo);
    todoInput.value = '';
    renderTodo()
}


// Delete Todo

function deleteTodo(index){
    console.log('todo deleted' , index);
    todo.splice(index , 1);
    renderTodo()

}

function editTodo(index){
    console.log('todo edited' , index);
    const editedTodo = prompt('Edit your task here' , todo[index])
    todo.splice(index , 1 , editedTodo)
    renderTodo()
}