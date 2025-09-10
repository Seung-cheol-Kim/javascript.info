let weakMap = new WeakMap();

let obj = {};
let test = {};

weakMap.set(obj, "ok"); //정상적으로 동작합니다(객체 키).

// 문자열("test")은 키로 사용할 수 없습니다.
weakMap.set(test, "Whoops"); // Error: Invalid value used as weak map key

console.log(weakMap)