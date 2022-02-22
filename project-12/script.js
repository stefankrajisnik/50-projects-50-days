// const toggles = document.querySelectorAll('.faq-toggle')

//  toggles.forEach(toggle => {
//      toggle.addEventListener('click', () => {
//          toggle.parentNode.classList.toggle('active')
//      })
//  })

const faqContainer = document.querySelector('.faq-container')

const childOfFaqContainer = faqContainer.querySelectorAll('.faq')

console.log(childOfFaqContainer)

const closeOpenFaq = () => {
    const openFaq = document.querySelector('.faq.active');
    console.log(openFaq);
    openFaq.classList.toggle('active');
}

childOfFaqContainer.forEach(child => {
    child.addEventListener('click',(e) =>{
        // TODO: if clicked on already active one, do nothing
        if (child.classList.contains('active')) {
            console.log('already active');
            return true;
        }

        // TODO: close open ones
        closeOpenFaq();
        child.classList.toggle('active')
    })
});