const input = document.querySelector('.input');
const todosUl = document.querySelector('.todos');

window.onload = loadFromLS();
window.onload = input.focus();
window.onload = updateLS();

input.addEventListener('keypress', (e) => {
    const todosArr = [];
    if (e.key === 'Enter') {
        let inputTask = input.value;

        const liEl = document.createElement('li');
        liEl.classList.add('.singleTaskEl')
        liEl.textContent = inputTask;
        todosUl.appendChild(liEl);

        input.value = ''

        const allTaskEl = document.querySelectorAll('li')
        allTaskEl.forEach(task => {
            todosArr.push({
                text: task.innerText,
                completed: task.classList.contains('completed')
            })
        });

        localStorage.setItem('task', JSON.stringify(todosArr))



    } else {
        console.log('key is not enter')
    };
});

function loadFromLS() {
    const todos = JSON.parse(localStorage.getItem('task'))
    if (todos) {

        console.log(todos)

        for (let i = 0; i < todos.length; i++) {
            const liEl = document.createElement('li');
            liEl.textContent = todos[i].text
            todosUl.appendChild(liEl)

            if (todos[i].completed) {
                liEl.classList.add('completed')
                console.log('yeaaa ' + liEl.classList)
            }
        }
    } else {
        return
    }

};

const liS = document.querySelectorAll('li');

liS.forEach((li) => {
    li.addEventListener('click', () => {
        li.classList.toggle('completed')
        updateLS()
    })
});

function updateLS() {
    const todosArr = [];
    const todosEl = document.querySelectorAll('li')

    todosEl.forEach((todoEl) =>{
        todosArr.push({
            text:todoEl.textContent,
            completed:todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('task', JSON.stringify(todosArr))
};
