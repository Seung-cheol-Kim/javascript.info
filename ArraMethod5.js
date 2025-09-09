function Calculator() {
    this.methods = {
        '-':(a, b) => a - b,
        '+':(a, b) => a + b
    };
    this.calculate = function(str){
        let arr = str.split(' ');
        let op = '';
        arr.forEach((item, index)=> {
            if(isNaN(item)){
                op = item;
                arr.splice(index, 1);
            }
        })
        return this.methods[op](+arr[0], +arr[1]);
    }
    this.addMethod = function(op , func){
        this.methods[op] = func;
    }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") );
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result );