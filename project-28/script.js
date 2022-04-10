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

let timeout = null;
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
    if (!username) {
        console.log('Nema username-a.');

        return {
            message: "Nema username-a"
        };
    }

    if (username.length > 39) {
        console.log('Username duzi od 39 karaktera.');

        return {
            message: "Username duzi od 39 karaktera."
        };
    }

    const response = await fetch (`https://api.github.com/users/${username}`, {
        headers: authorizationHeader,
    });

    const user = await response.json()

    if (user.message) {
        console.log('User nije pronadjen na GitHub-u');
        return {
            message: "User nije pronadjen na GitHub-u"
        };
    }

    return user;
}

// const populateGithubUser = (user) => { }  Isto kao ovo dole??
// function populateGithubUser(user) { }    Isto kao ovo dole?? 
const populateGithubUser = user => {
    const githubName = document.getElementById('github-name');
    const githubCompany = document.getElementById('github-company');
    const githubWebsite = document.getElementById('github-website');
    const githubPhoto = document.getElementById('github-photo');
    const githubFollowers = document.getElementById('github-followers');
    const githubFollowing = document.getElementById('github-following');
    const githubRepos = document.getElementById('github-repos');
    const githubBio = document.getElementById('github-bio');

    githubName.innerText = user.name;
    githubCompany.innerText = user.company;
    githubWebsite.innerText = user.blog;
    githubPhoto.src = user.avatar_url;
    githubFollowers.innerHTML = `${user.followers} <strong >Followers</strong>`;
    githubFollowing.innerHTML = `${user.following} <strong >Following</strong>`;
    githubRepos.innerHTML = `${user.public_repos} <strong >Repos</strong>`;
    githubBio.innerText = user.bio;

    
}

document.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.getElementById('search');

    inputSearch.addEventListener('keyup', event => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            getGithubUser(event.target.value).then(user => {
                // if (user === false)
                
                if (user.message) {
                    populateErrorMessage(user.message);
                } else {
                    populateGithubUser(user);

                }

                // user ? populateGithubUser(user) : console.log('Necemo populisati korisnika')

                // user && populateGithubUser(user);
            });
        }, 500);
    });
});

const populateErrorMessage = message => {
    const error = document.getElementById('error');

    error.innerText = message;

}