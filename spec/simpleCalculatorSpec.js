//  let Calculate = require('../src/simpleCalculatorP2');

 describe('class Calculator', () => {
    let calculate;
    beforeEach(() => {
        calculate = new Calculator()
    })
    it('should be defined', () => {
        expect(calculate).toBeDefined();
    });

})


describe('Calculator.add()', function () {
     let calculate;
    beforeEach(function () {
        calculate = new Calculator()
    });

    it('should add two or more numbers', function () {

        expect(calculate.add(5, 5, 4)).toBe(14);
    })
    it('should be able to recall the last value', function () {

        expect(calculate.add(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
    })
    it('should be able to recall the last value and add to a new value', function () {
        expect(calculate.add(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.add(calculate.lastValue(), 2)).toBe(16);
    })
    it('should be able to recall the last value and multiply to a new value', function () {
        expect(calculate.add(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.multiply(calculate.lastValue(), 2)).toBe(28);
    })

    it('should be able to recall the last value and add to a new value and set it last value', function () {
        expect(calculate.add(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.add(calculate.lastValue(), 2)).toBe(16);
        expect(calculate.set_slot(1)).toBe(16);
    })
    it('should be able to get last set value', function () {
        expect(calculate.add(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.add(calculate.lastValue(), 2)).toBe(16);
        expect(calculate.set_slot(1)).toBe(16);
        expect(calculate.get_slot(1)).toBe(16);
    })
    it('should be able to get last set value and add to a new value', function () {
        expect(calculate.add(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.add(calculate.lastValue(), 2)).toBe(16);
        expect(calculate.set_slot(1)).toBe(16);
        expect(calculate.get_slot(1)).toBe(16);
        expect(calculate.add(calculate.get_slot(1), 4)).toBe(20);
       
    })
    it('should be able to get last set value and add to the last calculated value', function () {
        expect(calculate.add(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.add(calculate.lastValue(), 2)).toBe(16);
        expect(calculate.set_slot(1)).toBe(16);
        expect(calculate.get_slot(1)).toBe(16);
        expect(calculate.add(calculate.get_slot(1), 4)).toBe(20);
        expect(calculate.add(calculate.get_slot(1), calculate.lastValue())).toBe(36);
    })
});

    describe('Calculator.multiply()', function () {
        let calculate;
        beforeEach(function () {
            calculate = new Calculator()
        });

    it('should multiply two or more numbers', function () {
        expect(calculate.multiply(5, 5, 4)).toBe(100);
    })
    it('should be able to recall the last value', function () {
        expect(calculate.multiply(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
    })
    it('should be able to recall the last value and multiply to a new value', function () {
        expect(calculate.multiply(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.multiply(calculate.lastValue(), 2)).toBe(200);
    })
    it('should be able to recall the last value and multiply to a new value', function () {
        expect(calculate.multiply(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.add(calculate.lastValue(), 2)).toBe(102);
    })
    it('should be able to recall the last value and multiply to a new value and set it last value', function () {
        expect(calculate.multiply(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.multiply(calculate.lastValue(), 2)).toBe(200);
        expect(calculate.set_slot(1)).toBe(200);
    })
    it('should be able to get last set value', function () {
        expect(calculate.multiply(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.multiply(calculate.lastValue(), 2)).toBe(200);
        expect(calculate.set_slot(1)).toBe(200);
        expect(calculate.get_slot(1)).toBe(200);
    })
    it('should be able to get last set value and multiply to a new value', function () {
        expect(calculate.multiply(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.multiply(calculate.lastValue(), 2)).toBe(200);
        expect(calculate.set_slot(1)).toBe(200);
        expect(calculate.get_slot(1)).toBe(200);
        expect(calculate.multiply(calculate.get_slot(1), 4)).toBe(800);

    })
    it('should be able to get last set value and multiply to last calculated value ', function () {
        expect(calculate.multiply(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.multiply(calculate.lastValue(), 2)).toBe(200);
        expect(calculate.set_slot(1)).toBe(200);
        expect(calculate.get_slot(1)).toBe(200);
        expect(calculate.multiply(calculate.get_slot(1), 4)).toBe(800);
        expect(calculate.multiply(calculate.get_slot(1), calculate.lastValue())).toBe(160000);

    })
})