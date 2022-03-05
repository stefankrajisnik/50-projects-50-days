const counters = document.querySelectorAll('.counter')

counters.forEach(counter => { 
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        const counterText = +counter.innerText

        const increment = target/100

        if(counterText<target){
            counter.innerText = `${Math.round(counterText+increment)}`
            setTimeout(updateCounter,1)
        } else{
            counter.innerText = target
        }
        

    }

    updateCounter()
})
