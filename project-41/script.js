const codes = document.querySelectorAll('.digit');
const digitContainer = document.querySelector('.digit-container');

codes[0].focus();

codes.forEach((code, idx) => {

    code.addEventListener('keydown', (e) => {
        let currentElement = e.target;
        let lastElement = digitContainer.lastElementChild;
        
        if(currentElement == lastElement && e.key !=='Backspace'){
            codes[idx].value = ''
        } else if(e.key >= 0 && e.key <=9 ) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {

            if(idx>0){
                setTimeout(() => codes[idx-1].focus(), 10)
            }
        };

        
    });
});