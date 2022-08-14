const range = document.querySelector('#range');

range.addEventListener('input', (e) => {
    let value = e.target.value;
    console.log(value)
    let label = e.target.nextElementSibling;
    console.log(label)

    const range_width = range.clientWidth;
    const label_width = label.clientWidth;

    const max = + e.target.max;
    const min = + e.target.min;

    const left = value * (range_width / max) - label_width / 2;

    label.style.left = `${left}px`;

    label.innerText = value;
});

// second way

/*

const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(label).getPropertyValue('width');

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;


    const left = value * (num_width / max) - num_label_width / 2 ;

    label.style.left = `${left}px`


    label.innerHTML = value
})

*/
