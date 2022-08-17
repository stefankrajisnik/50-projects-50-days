document.addEventListener('DOMContentLoaded', () => {
    renderTodos();
    handleInput();
});

const renderTodos = () => {
    const todos = getTodosFromLocalStorage();

    todos.forEach(todo => {
        addTodo(todo);
        handleToggle(todo);
    })
}

const getTodosFromLocalStorage = () => {
    let todos = JSON.parse(localStorage.getItem('TODO'));

    if (!todos) {
        return [];
    }

    return todos;
}

const updateTodoInLocalStorage = (todo) => {
    const todos = getTodosFromLocalStorage();

    const index = todos.findIndex(element => {
        return element.id === todo.id;
    });   

    todos[index].completed = todo.completed;

    localStorage.setItem('TODO', JSON.stringify(todos));
}

const addTodo = todo => {
    const todos = document.getElementById('todos');

    const todoElement = document.createElement('li');
    todoElement.textContent = todo.text;
    todoElement.dataset.id = todo.id;

    if (todo.completed) {
        todoElement.classList.add('completed');
    }

    todos.appendChild(todoElement);
}

const addTodoToLocalStorage = text => {
    const todos = getTodosFromLocalStorage();

    const todo = {
        id: todos.length + 1,
        text: text,
        completed: false,
        createdAt: Date.now(),
    };

    todos.push(todo);

    localStorage.setItem('TODO', JSON.stringify(todos));

    return todo;
}

const handleInput = () => {
    const input = document.querySelector('.input');

    input.addEventListener('keypress', e => {
        if (e.key !== 'Enter') {
            return;
        }
        e.preventDefault();

        const todo = addTodoToLocalStorage(input.value);
        addTodo(todo);
        handleToggle(todo);

        input.value = '';
        input.focus();
    });
};

const handleToggle = todo => {
    const todoElement = document.querySelector(`[data-id='${todo.id}']`);

    todoElement.addEventListener('click', e => {
        todoElement.classList.toggle('completed');
        todo.completed = !todo.completed;;
        updateTodoInLocalStorage(todo);
    });
};
