const RAF = require('raf');
const Lerp = require('../src/index.js');
const DOM = document.getElementById('test');

// Init Lerp
let lerpX = new Lerp({
    current : 0,
    target : 0,
    speed : 0.1
});

let lerpY = new Lerp({
    current : 0,
    target : 0,
    speed : 0.1
});

// Update Lerp
let update = () => {
    lerpX.update();
    lerpY.update();
    DOM.style.left = lerpX.getCurrent() + "px";
    DOM.style.top = lerpY.getCurrent() + "px";
}


window.addEventListener('mousemove', (e) => {
    lerpX.setTarget(e.pageX, () => {
        console.log('e');
    }); 
    lerpY.setTarget(e.pageY);
});

RAF.add(update);