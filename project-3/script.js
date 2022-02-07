 const open = document.getElementById("open")
 const close = document.getElementById("close")
 const container = document.querySelector('.container')

const handleOpen = () => {
    container.classList.add('show-nav');
}

const handleClose = () => {
    container.classList.add('show-nav');
}

open.addEventListener('click', handleOpen);
close.addEventListener('click', handleClose);



// TEST BUTTON
const testButtons = document.querySelectorAll('.test-button');

const handleClick = event => event.target.innerText = 'CLICKED';
const addListener = element => element.addEventListener('click', handleClick);
testButtons.forEach(addListener);
