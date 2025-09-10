function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

/*
반복문 내 i는 3부터 시작합니다. 피보나치 수열의 첫 번째 항과 두 번째 항은 a=1, b=1로 하드코딩 했기 때문입니다.

이런 접근 방법은 bottom-up 다이내믹 프로그래밍(dynamic programming, 동적 계획법)이라 부릅니다.
*/