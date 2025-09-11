function sum(a) {
    let result = a
    function func(b){
        result += b
        return func
    }
    func.toString = function() {
        return result;
    };
    return func
}


console.log( +sum(1)(2) ); // 3
console.log( +sum(5)(-1)(2) ); // 6
console.log( +sum(6)(-1)(-2)(-3) ); // 0
console.log( +sum(0)(1)(2)(3)(4)(5) ); // 15