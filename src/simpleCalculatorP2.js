
class Calculator {
    constructor() {
        this.slot = [];
    }
    plus() {
        let sum = 0;

        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
            this.lastVal = sum;
        }
        return sum;
    }
    times() {
        let sum = 1;

        for (let i = 0; i < arguments.length; i++) {
            sum *= arguments[i];
            this.lastVal = sum;
        }
        return sum;￼
    }
    lastValue() {
        return this.lastVal;
    }
    slot_set(i) {
        this.slot.push(this.lastVal);
        return this.slot[i - 1]
    }
    slot_get(i) {
        return this.slot[i - 1]
    }
}