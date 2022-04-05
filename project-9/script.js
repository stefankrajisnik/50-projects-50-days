const sounds = ['applause','airplane','slot-win','wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    
    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()


        
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}
const handleSound = (element, index) => {
    console.log('Prolazimo kroz element: ', element);
    console.log('Prolazimo kroz element na indeksu: ', index);
}

function handleSound2(element, index) {
    console.log('Prolazimo kroz element: ', element);
    console.log('Prolazimo kroz element na indeksu: ', index);
}

sounds.forEach(handleSound)
sounds.forEach(handleSound2)

sounds.forEach((element, index) => {
    console.log('Prolazimo kroz element: ', element);
    console.log('Prolazimo kroz element na indeksu: ', index);
})

sounds.forEach(function(element, index) {
    console.log('Prolazimo kroz element: ', element);
    console.log('Prolazimo kroz element na indeksu: ', index);
})
