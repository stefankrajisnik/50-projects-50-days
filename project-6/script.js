const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)

const boxClass = 'show';

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4



    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if( boxTop < triggerBottom){
            box.classList.add(boxClass)
        } else { 
            box.classList.remove(boxClass)
        }
    })
}
