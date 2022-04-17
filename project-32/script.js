const fast = document.querySelector('#fast')
const cheap = document.querySelector('#cheap')
const good = document.querySelector('#good')
const toggles = document.querySelectorAll('.toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('change', ()=>{
        dissableCheap()
    })
})

function dissableCheap () {
    if (good.checked === true && fast.checked === true){

            cheap.checked = false;
    }  
}
