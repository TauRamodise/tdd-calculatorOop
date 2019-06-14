describe('Calculator', function () {
    let calculate;
    beforeEach(function () {
        calculate = new Calculator()
    });

    it('should add two or more numbers', function () {
        expect(calculate.plus(5, 5, 4)).toBe(14);
    })
    it('should be able to recall the last value', function () {
        expect(calculate.plus(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
    })
    it('should be able to recall the last value and add to a new value', function () {
        expect(calculate.plus(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.plus(calculate.lastValue(), 2)).toBe(16);
    })
    it('should be able to recall the last value and multiply to a new value', function () {
        expect(calculate.plus(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.times(calculate.lastValue(), 2)).toBe(28);
    })

    it('should be able to recall the last value and add to a new value and set it last value', function () {
        expect(calculate.plus(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.plus(calculate.lastValue(), 2)).toBe(16);
        expect(calculate.slot_set(1)).toBe(16);
    })
    it('should be able to get last set value', function () {
        expect(calculate.plus(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.plus(calculate.lastValue(), 2)).toBe(16);
        expect(calculate.slot_set(1)).toBe(16);
        expect(calculate.slot_get(1)).toBe(16);
    })
    it('should be able to get last set value and add to a new value', function () {
        expect(calculate.plus(5, 5, 4)).toBe(14);
        expect(calculate.lastValue()).toBe(14);
        expect(calculate.plus(calculate.lastValue(), 2)).toBe(16);
        expect(calculate.slot_set(1)).toBe(16);
        expect(calculate.slot_get(1)).toBe(16);
        expect(calculate.plus(calculate.slot_get(1), 4)).toBe(20);
    })

    it('should multiply two or more numbers', function () {
        expect(calculate.times(5, 5, 4)).toBe(100);
    })
    it('should be able to recall the last value', function () {
        expect(calculate.times(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
    })
    it('should be able to recall the last value and multiply to a new value', function () {
        expect(calculate.times(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.times(calculate.lastValue(), 2)).toBe(200);
    })
    it('should be able to recall the last value and multiply to a new value', function () {
        expect(calculate.times(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.plus(calculate.lastValue(), 2)).toBe(102);
    })
    it('should be able to recall the last value and multiply to a new value and set it last value', function () {
        expect(calculate.times(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.times(calculate.lastValue(), 2)).toBe(200);
        expect(calculate.slot_set(1)).toBe(200);
    })
    it('should be able to get last set value', function () {
        expect(calculate.times(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.times(calculate.lastValue(), 2)).toBe(200);
        expect(calculate.slot_set(1)).toBe(200);
        expect(calculate.slot_get(1)).toBe(200);
    })
    it('should be able to get last set value and multiply to a new value', function () {
        expect(calculate.times(5, 5, 4)).toBe(100);
        expect(calculate.lastValue()).toBe(100);
        expect(calculate.times(calculate.lastValue(), 2)).toBe(200);
        expect(calculate.slot_set(1)).toBe(200);
        expect(calculate.slot_get(1)).toBe(200);
        expect(calculate.times(calculate.slot_get(1), 4)).toBe(800);
    })
})