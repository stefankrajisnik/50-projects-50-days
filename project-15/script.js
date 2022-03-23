const counters = document.querySelectorAll('.counter')

counters.forEach(counter => { 
    counter.innerText = ""

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        const counterText = +counter.innerText

        const increment = target/200

        if(counterText<target){
            counter.innerText = `${Math.ceil(counterText+increment)}`
            setTimeout(updateCounter,1)
        } else{
            counter.innerText = target
        }
        

    }

    updateCounter()
})
