
 class Calculator {
    constructor() {
        this.slot = [];
    }
    add() {
        let sum = 0;

        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
            this.lastVal = sum;
        }
        return sum;
    }
    multiply() {
        let result = 1;

        for (let i = 0; i < arguments.length; i++) {
            result *= arguments[i];
            this.lastVal = result;
        }
        return result;
    }
    lastValue() {
        return this.lastVal;
    }
    set_slot(i) {
        this.slot.push(this.lastVal);
        return this.slot[i - 1]
    }
    get_slot(i) {
        return this.slot[i - 1]
    }
}

