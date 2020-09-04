
document.querySelector('form').addEventListener('submit', handlesubmitform);
document.querySelector('ul').addEventListener('click', handleClickOrDeleteEvent);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

//event handler to add the task in the list
function handlesubmitform(e) {
    e.preventDefault();

    let input = document.querySelector('input');
    if (input.value != '') {
        addTask(input.value);
        input.value = '';
    }
}

//event handler to check or delete the task in the list
function handleClickOrDeleteEvent(e) {

    if (e.target.name == 'checkButton') {
        checkTask(e);
    } else {
        deleteTask(e);
    }
}

//event handler to clear all the task from the list
function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

//to add the todo task in the list
function addTask(task) {

    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `

    <span class = "task-list">${task}</span>
    <button name = "checkButton" style = "cursor: pointer"><i class="fas fa-check-square"></i></button>
    <button name = "deleteButton" class = "deleteButton" style = "cursor: pointer"><i class="fas fa-trash"></i></button>
    
    `;

    li.classList.add('list-item');
    ul.appendChild(li);
}

//to check the completed task in the list
function checkTask(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through') {
        item.style.textDecoration = 'none';
    } else {
        item.style.textDecoration = 'line-through';
    }
}

//to delete the task from the list
function deleteTask(e) {
    let item = e.target.parentNode;
    //innovation part i.e. task will delete in a animation mode
    item.addEventListener('transitionend', function () {
        item.remove()
    })
    item.classList.add('task-list-fall');
}