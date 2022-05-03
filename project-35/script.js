const imgContainer = document.querySelector('.image-container')
const images = document.querySelectorAll('.image-container img')
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let idx = 0;
let interval = setInterval(run,2000);


function run() {
    idx++;
    translate()
}

function translate() {
    if(idx > images.length - 1) {
        idx = 0;
    }else if(idx<0){
        idx = images.length - 1;
    }

    let imgwidth = images[idx].width

    imgContainer.style.transform = `translateX(${-imgwidth * idx}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run,2000)
}

leftBtn.addEventListener('click', ()=> {
    resetInterval()
    idx--;
    translate()

})

rightBtn.addEventListener('click', ()=> {
    resetInterval()
    idx++;
    translate()
})
