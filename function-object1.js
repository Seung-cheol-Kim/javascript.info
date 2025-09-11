function makeCounter() {
    // 1. 카운터의 상태를 저장할 비공개 변수 선언
    let count = 0;

    // 2. 외부에 반환될 핵심 함수(counter) 정의
    function counter() {
        // 이 함수를 호출하면 현재 count 값을 반환하고, 그 후에 1 증가시킴
        return count++; 
    }

    // 3. 자바스크립트에서 함수는 객체! -> 함수에 직접 메서드(기능) 추가
    // counter 함수의 set 속성에 새로운 함수를 할당
    counter.set = function(value) {
        count = value; // 비공개 변수인 count 값을 외부에서 받은 value로 강제 설정
    };

    // counter 함수의 decrease 속성에 새로운 함수를 할당
    counter.decrease = function() {
        count--; // 비공개 변수인 count 값을 1 감소
    };

    // 4. count 변수를 기억하고, set/decrease 기능까지 장착된 counter 함수를 반환
    return counter;
}
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  counter.set(10); // set the new count
  
  console.log( counter() ); // 10
  
  counter.decrease(); // decrease the count by 1
  
  console.log( counter() ); // 10 (instead of 11)