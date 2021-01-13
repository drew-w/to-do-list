document.querySelector('form').addEventListener('submit', addTodo);

function addTodo(event){
    // prevents form from refreshing page
    event.preventDefault();
    // creating a new <li></li> with the text from our input
    const todo = document.createElement('li');
    todo.innerText = document.getElementById('item').value;
    todo.addEventListener("click", completeTodo)
    // creating a button that will remove the todo item
    const button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener('click', removeTodo);
    todo.append(button);

    const list = document.querySelector('ul');
    list.appendChild(todo);
    // resetting our input to an empty field
    const input = document.getElementById('item');
    input.value = ''
}

function removeTodo(event){
    event.target.parentNode.remove();
}

function completeTodo(event){
    const value = event.target.getAttribute('aria-checked')
    if( value === "true") {
        event.target.setAttribute('aria-checked', 'false')
    } else {
        event.target.setAttribute('aria-checked', 'true')
    }
}

