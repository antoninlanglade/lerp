const _  = require('lodash');

const SPEED = 0.05;

class Lerp {
    
    constructor(props) {
        // Current
        this.current = props.current || 0;
        this.setCloneStart();

        // Target
        this.target = props.target || 0; 

        this.callback = props.callback;
        this.speed = props.speed || SPEED;
        this.once = false;
        
    }
    
    update() {
        let progress = this.map(this.current, this._current, this.target, 0, 1);
        this.current = this.current + (this.target - this.current) * SPEED;
        if (progress > 0.99) this.dispatchOnce();
    }
    
    setTarget(target, callback) {
        this.setCloneStart();
        this.target = target;
        this.once = false;
        if (callback) this.callback = callback;
    }

    getTarget() {
        return this.target;
    }

    getCurrent() {
        return this.current;
    }

    setCloneStart() {
        this._current = _.clone(this.current);
    }

    dispatchOnce() {
        if (!this.once) {
            this.once = true;
            this.callback && this.callback();   
        }
    }
    
    map(value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    }
}

module.exports = Lerp;