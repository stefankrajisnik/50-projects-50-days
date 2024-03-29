const panel = document.getElementById('panel');
const ratings = document.querySelectorAll('.rating');
let selectedRating = 'Satisfied';
const sendBtn = document.querySelector('.btn')
const ratingContainer = document.querySelector('.ratings-container')
let removeActive = () => {
    for(let i=0; i<ratings.length; i++){
        ratings[i].classList.remove('active');
    };
};

ratingContainer.addEventListener('click', (e)=> {
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();

        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
        console.log(e.target.nextElementSibling.innerHTML)
    };
});


sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
});