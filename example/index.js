const RAF = require('raf');
const Lerp = require('../src/index.js');
const DOM = document.getElementById('test');

// Init Lerp
let lerp = new Lerp({
    current : 0,
    target : 1,
    ease : [0.065, 0.635, 0.880, 0.145],
    callback : () => {
        console.log('end');
    }
});

// Update Lerp
let update = () => {
    lerp.update();
    DOM.style.top = lerp.getCurrent() * 50 + '%'; 
}

let sign = 0;
window.addEventListener('click', () => {
    sign = (sign + 1) % 2;
    // Change lerp target
    lerp.setTarget(sign, () => {
        console.log('end2');
    }); 
});

RAF.add(update);