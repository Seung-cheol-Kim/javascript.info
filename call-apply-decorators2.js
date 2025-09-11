let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log(`slow(${x})을/를 호출함`);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // 이젠 'this'가 제대로 전달됩니다.
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // 캐싱 데코레이터 적용

console.log( worker.slow(2) ); // 제대로 동작합니다.
console.log( worker.slow(2) );