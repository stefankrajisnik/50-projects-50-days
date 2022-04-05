// fetch('https://api.github.com/users/defunkt')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })

const username = 'stefankrajisnik';
const password = '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';
const credentials = btoa(`${username}:${password}`);

const authorizationHeader = {
    'Authorization' : `Basic ${credentials}`,
};

let timeout;
// kucamo async jer je fetch funkcija koja je asinhrona

// async function getGithubUser(username) {
//     const user = await fetch(`https://api.github.com/users/${username}`, {
//         headers: authorizationHeader,
//     })
//     .then(response => {
//         return response.json();
//     })
    // zasto ovdje data ako je moglo opet response response ?
    
//     .then(data => {
//         return data;
//     });

//     return user;
// }

async function getGithubUser(username) {
    const response = await fetch (`https://api.github.com/users/${username}`, {
                headers: authorizationHeader,
            })

    const user = await response.json()
    console.log(user)
    return user;

    
}
// const populateGithubUser = (user) => { }  Isto kao ovo dole??
// function populateGithubUser(user) { }    Isto kao ovo dole?? 
const populateGithubUser = user => {
    console.log(user);

    const githubName = document.getElementById('github-name');
    const githubCompany = document.getElementById('github-company');
    const githubWebsite = document.getElementById('github-website');
    const githubPhoto = document.getElementById('github-photo');
    const userFollowing = document.getElementById('following')

    githubName.innerText = user.name;
    githubCompany.innerText = user.company;
    githubWebsite.innerText = user.blog;
    githubPhoto.src = user.avatar_url;
    userFollowing.innerText = user.following;
}

document.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.getElementById('search');

    inputSearch.addEventListener('keyup', event => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            getGithubUser(event.target.value).then(user => {
                populateGithubUser(user);
            });
        }, 500);
    });


});