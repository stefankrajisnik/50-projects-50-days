const filter = document.querySelector('#filter');
const result = document.querySelector('#result');
let listItems = [];

getData();

let filterUsers = (searchTerm) => {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide');
        }else{
            item.classList.add('hide');
        }
    } )
};

filter.addEventListener('input', (e) => filterUsers(e.target.value))

async function getData() { 
    const res = await fetch('https://randomuser.me/api/?results=50');
    const { results } = await res.json();

    //clearing result
    result.innerHTML = '';

    results.forEach(user => { 
       let userElement = document.createElement('li');
       listItems.push(userElement);

       userElement.innerHTML = `
       <img src="${user.picture.large}">
       <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.country}, ${user.location.city}</p>
    `;
       
       result.appendChild(userElement);
    })
};

