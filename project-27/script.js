const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message one',
    'Message two',
    'Message three',
    'Message four',
]

const types = [
    'info', 
    'succes',
    'error',
]

button.addEventListener('click', () => createNotifications())

function createNotifications(type = null, message = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    

    
    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)
    
    setTimeout(() => {
        notif.remove()}, 3000)

}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

