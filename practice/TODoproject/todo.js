let todoList = [{ item: 'Buy milk', dueDate: '4/8/2025' }];

function addTodo() {
    let inputElement = document.querySelector('#enter');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value.trim();
    let todoDate = dateElement.value;

    if (todoItem !== '') {
        todoList.push({
            item: todoItem,
            dueDate: todoDate
        });
        inputElement.value = '';
        dateElement.value = '';
        displayItems();
    }
}
function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;

        newHtml += `
        <div class="todo-row">
            <span class="todo-item">${item}</span>
            <span class="todo-date">Due: ${dueDate}</span>
            <button class="delete-button" onclick="deleteTodo(${i})">Delete</button>
        </div>`;
    }

    containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    displayItems();
}

// Initial call
displayItems();
