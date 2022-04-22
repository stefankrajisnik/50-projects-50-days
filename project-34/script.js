const counter = document.querySelector('.counter')
const nums = document.querySelectorAll('.nums span')
const finalMessage = document.querySelector('.final')
const spanNums = document.querySelectorAll('.span')
const replay = document.querySelector('#replay')

console.log(nums)

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}


function runAnimation() {
    nums.forEach((num,idx) => {
        
        const last = nums.length - 1
        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== last){
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            }else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}


replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})
