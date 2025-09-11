let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) ); // 3

function getNewFunc() {
  let value = "test";

  let func = function() { console.log(value); };

  return func;
}

getNewFunc()(); // getFunc의 렉시컬 환경에 있는 값 "test"가 출력됩니다.

function getFunc() {
  let value = "test";

  let func = new Function('console.log(value)');

  return func;
}

getFunc()(); // ReferenceError: value is not defined
