// OOP CALCULATOR WITH MEMORY FUNCTION
class Calculator {
   constructor() {
      this.slot = []
      this.plus = function () {
         let sum = 0;

         for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
            this.lastVal = sum;
         }
         return sum;
      }
      this.times = function () {
         let sum = 1;

         for (let i = 0; i < arguments.length; i++) {
            sum *= arguments[i];
            this.lastVal = sum;
         }
         return sum;
      }
      this.lastValue = function () {
         return this.lastVal;
      }
      this.slot_set = function(i){
         this.slot.push(this.lastVal);
         return this.slot[i-1]
      } 
      this.slot_get = function(i){
         return this.slot[i-1]
      }
   }
}

let calculate = new Calculator();

console.log(calculate.plus(5, 6));
console.log(calculate.lastValue());
console.log(calculate.times(calculate.lastValue(), 3));

console.log(calculate.times(5, 6));
console.log(calculate.lastValue());
console.log(calculate.plus(calculate.lastValue(), 3));

