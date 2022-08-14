const input = document.querySelector('.input');
const todosList = document.querySelector('.todos');
let tasksArr = [];

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const todos = JSON.parse(localStorage.getItem('task'))
        console.log(todos)

        let inputTask = input.value;

        const liEl = document.createElement('li');
        liEl.classList.add('.singleTaskEl')
        liEl.textContent = inputTask;
        todosList.appendChild(liEl);

        //prevent reloading page
        e.preventDefault()
        input.value = ''

        //add entered task in array
        const allTaskEl = document.querySelectorAll('li')
        allTaskEl.forEach(task => {
            tasksArr.push({
                text: task.innerText,
                completed: task.classList.contains('completed')
            }) 
        });
        // tasksArr.push(inputTask);

        //store every single task from array into the Local Storage
        localStorage.setItem('task',JSON.stringify(tasksArr))


        
    } else {
        console.log('key is not enter')
    };
})


    //DOES NOT WORK WITH GETELEMENTBYCLASSNAME 
      //add entered task in array
    //   const allTaskEl = document.getElementsByClassName('.singleTaskEl')
    //   allTaskEl.forEach(task => {
    //       tasksArr.push({
    //           text: task.innerText,
    //           completed: task.classList.contains('completed')
    //       }) 
    //   });
      // tasksArr.push(inputTask);