// Get reference to elements
const inputTodo = document.getElementById('input-todo');
const addBtn = document.getElementById('add-btn');
const ul = document.getElementById('ul');
const noTodo = document.getElementById('no-todo');
const modal = document.getElementById('modal');
const editInput = document.getElementById('edit-input');
const editBtn = document.getElementById('edit-btn');
const modalClose = document.getElementById('modal-close');
const overly = document.getElementById('overly');
const errorTodo = document.getElementById('error-todo');
const modalError = document.getElementById('modal-error');
const del = document.getElementById('del');

const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
let day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();

let date = `${day}.${month}.${year}`;

const todos = JSON.parse(localStorage.getItem('list-todos')) || [];

if (todos.length) {
    console.log("date", date);
    showTodos();
}


// Todo ni localstorage ga qo'shish
function setTodoLocal() {
    localStorage.setItem('list-todos', JSON.stringify(todos));
}

// Todo qo'shish


// Event listener for add button
addBtn.addEventListener('click', () => {
    const todoText = inputTodo.value.trim();
    if (todoText) {
        addTodo(todoText);
        clearInput(inputTodo);
    } else {
        errorTodo.textContent = 'Enter some text...';
        setTimeout(() => {
            errorTodo.textContent = '';
        }, 3000);
    }
});

function addTodo(todoText) {
    todos.push(todoText);
    setTodoLocal();
    showTodos();
}
// show todos DOM

function showTodos() {
    ul.innerHTML = '';
    todos.forEach((todo, i) => {
        const li = document.createElement('li');

        // todo matnini qo'shish
        const text = document.createElement('span');
        text.textContent = todo;
        li.appendChild(text);

        // date p elementini qo'shish
        const data = document.createElement('p');
        data.textContent = date;
        li.appendChild(data);

        // span elementini qo'shish
        const span = document.createElement('span');



        // delIcon yaratish va qo'shish
        const delIcon = document.createElement('i');
        delIcon.className = 'fas fa-trash';
        delIcon.addEventListener('click', () => {
            deleteTodo(i);
        });
        span.appendChild(delIcon);

        li.appendChild(span);

        // ul ga li elementini qo'shish
        ul.appendChild(li);
    });
    noText();
}


inputTodo.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputTodo.value.trim()) {
        todos.push(inputTodo.value.trim());
        setTodoLocal();
        showTodos();
        clearInput(inputTodo);
    } else {
        errorTodo.textContent = 'Enter some text...';
        setTimeout(() => {
            errorTodo.textContent = '';
        }, 3000);
    }
});

// clearInput
function clearInput(input) {
    input.value = '';
}

// set todo localeStorage
function setTodoLocal() {
    localStorage.setItem('list-todos', JSON.stringify(todos));
}

// edit todo
function editTodo(index) {
    editInput.value = todos[index];
    modal.classList.remove('hidden');
    overly.classList.remove('hidden');
}

// Event listener for edit button
editBtn.addEventListener('click', () => { // Removed unnecessary parameters
    if (editInput.value.trim()) {
        todos.value = editInput.value.trim(); // Corrected index variable
        setTodoLocal();
        showTodos();
        close();
    } else {
        modalError.textContent = 'Enter some text...';
        setTimeout(() => {
            modalError.textContent = '';
        }, 3000);
    }
});

// Function to delete a todo
function deleteTodo(index) {
    todos.splice(index, 1);
    setTodoLocal();
    showTodos();
}

// Function to display appropriate message if no todos
function noText() {
    noTodo.textContent = todos.length ? '' : 'No Todos Yet :)';
}

// Event listeners for modal close
modalClose.addEventListener('click', close);
overly.addEventListener('click', close);

function close() {
    modal.classList.add('hidden');
    overly.classList.add('hidden');
}

function todoCompleted(id) {
    const completedTodos = todos.map((item, i) => {
        if (id == i) {
            return { ...item, completd: item.completed == true ? false : true }
        } else {
            return { ...item }
        }
    })
    todos = completedTodos
    setTodoLocal()
    showTodos()
}

// edit todo
function editTodo(index) {
    editInput.value = todos[index]; // Modal input qiymatini index bo'yicha o'zgartiramiz
    modal.classList.remove('hidden');
    overly.classList.remove('hidden');
}
