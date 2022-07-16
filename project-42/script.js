const filter = document.querySelector('#filter')
const result = document.querySelector('#result')
let listItems = []

getData()

async function getData() { 
    const res = await fetch('https://randomuser.me/api/?results=50')
    const { results } = await res.json()

    //clearing result
    console.log(results)
    result.innerHTML = ''

    results.forEach(user => { 
       let userElement = document.createElement('li')
       userElement.innerHTML = `
       <img src="${user.picture.large}">
       <h4>${user.name.first} ${user.name.last}</h4>
        <p>Name is: ${user.location.city}, ${user.location.country}</p>
       `
       result.appendChild(userElement)
    })
    
}


