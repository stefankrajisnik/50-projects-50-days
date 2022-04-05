const username = 'stefankrajisnik';
const password = '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';
const credentials = btoa(`${username}:${password}`);

const authorizationHeader = {
    'Authorization' : `Basic ${credentials}`,
};

let timeout;

async function getGithubUser(username) {
    const response = await fetch (`https://api.github.com/users/${username}`, {
                headers: authorizationHeader,
            })

    const user = await response.json()
    console.log(user)
    return user;

    
}

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