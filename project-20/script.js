const buttons = document.querySelectorAll('.ripple');

buttons.forEach( button => {
    button.addEventListener('click', function(e) {
        const xCoordinateClick = e.clientX
        const yCoordinateClick = e.clientY

        const buttonTop = button.offsetTop
        const buttonLeft = button.offsetLeft
        
        const insideX = xCoordinateClick - buttonLeft
        const insideY = yCoordinateClick - buttonTop
  
        const circle = document.createElement("span")
        circle.classList.add('circle')
          
        circle.style.top = `${insideY}px`
        circle.style.left = `${insideX}px`
        
        this.appendChild(circle)

        setTimeout(() => circle.remove(),1000)

    })
})

