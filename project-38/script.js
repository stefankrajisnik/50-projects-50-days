let images = {
    home: 'home',
    aboutUs: 'about-us',
    work: 'work',
    blog: 'blog',
}

let icons = document.querySelectorAll('.tab')
let screen =  document.querySelector('.mobile-screen')

icons.forEach(icon => {
    icon.addEventListener('click', (e) =>{
        console.log(e.target)
        let icon = e.target
        let nameAtribute = icon.getAttribute('name')

        for (key of Object.keys(images)){
            if(key === nameAtribute){
                let keyValue = images[key]
                screen.style.backgroundImage =  `url('/images/${keyValue}.jpg')`
            }
        }

    })
})


