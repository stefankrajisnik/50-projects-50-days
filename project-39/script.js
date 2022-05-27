const passwordEl = document.querySelector('.password input')
const bckgImage = document.querySelector('.background')
let startBlur = 10
passwordEl.addEventListener('keydown', ()=> {
let passwordValue = passwordEl.value
let passwordLength = passwordValue.length
console.log(passwordValue.length)

bckgImage.style.filter = `blur(${startBlur - passwordLength}px)`
})