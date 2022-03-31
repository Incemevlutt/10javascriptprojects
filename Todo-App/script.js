const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos= JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach((todo)=> {
        addTodo(todo);
    });

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

 function addTodo(){
    const todoText = input.value;

    if(todoText){
        const todoEl = document.createElement('li');
        todoEl.innerText=todoText;

        todoEl.addEventListener('click', ()=>{
            todoEl.classList.toggle('completed');

            updateLS();
        });
        
        todoEl.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
            todoEl.remove();    

            updateLS(); 
        });

        todosUL.appendChild(todoEl);
        input.value = '';

        updateLS();
    }
 }

  function updateLS(){
     const todoEl = document.querySelectorAll('li');
     const todoList = [];

        todoEl.forEach(todoEl => {
            todos.push({
                text: todoEl.innerText,
                completed: todoEl.classList.contains('completed')
            });
        });

        localStorage.setItem('todos', JSON.stringify(todos));
    }
}