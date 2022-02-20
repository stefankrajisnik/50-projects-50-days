const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

let sale = '';



function generateJoke() {

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            accept: 'application/json'
        },

    })
        .then((res) => res.json())
        .then(data => {
            sale = sale + '\n' + data.joke;
            console.log({sale})
            return true;
        })
        .then(
            fetch('https://icanhazdadjoke.com/', {
                headers: {
                    accept: 'application/json'
                },

            })
                .then((res) => res.json())
                .then(data => {
                    sale = sale + '\n' + data.joke;
                    console.log({sale})
                    return true;
                })
                .then(
                    fetch('https://icanhazdadjoke.com/', {
                        headers: {
                            accept: 'application/json'
                        },

                    })
                        .then((res) => res.json())
                        .then(data => {
                            sale = sale + '\n' + data.joke;
                                console.log({sale})
                            jokeEl.innerText = sale;
                        })
                )
        )

    jokeBtn.addEventListener('click', generateJoke)

}


generateJoke()


let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('succes')
    } else {
        reject('failed')

    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})



let d = new Promise((ispravno, neispravno) => {
    let d = 1 + 1
    if (d == 2) {
        ispravno("dobro")
    } else {
        neispravno("lose")

    }
})

d.then((poruka) => {
    console.log('Uspjesno: Ovo je ' + poruka)
}).catch((poruka) => {
    console.log('Greska uhvacena: Ovo je ' + poruka)
})
