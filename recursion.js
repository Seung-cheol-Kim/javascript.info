let company = { // 동일한 객체(간결성을 위해 약간 압축함)
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// 급여 합계를 구해주는 함수
function sumSalaries(department) {
    console.log('recurs',department)
  if (Array.isArray(department)) { // 첫 번째 경우
    console.log('1',department.reduce((prev, current) => prev + current.salary, 0))
    return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
  } else { // 두 번째 경우
    let sum = 0;
    console.log('Object.values(department)',Object.values(department))
    for (let subdep of Object.values(department)) {
        console.log('subdep',subdep)
      sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
    }
    console.log('sum',sum)
    return sum;
  }
}
/*
재귀 알고리즘

함수 호출 if 배열일 경우 배열의 요소를 합함 > 첫번째 재귀일때 배열이 아니기 때문 else로 가서 Object.values로 값을 빼온것의
for of 문으로 subdep을 반복 지정 > supdep을 재귀함수의 매개변수로 받아와 두번째 재귀 > 배열이기 때문에 배열의 요소를 합한
값을 return > sum += sumSalaries(subdep)을 실행 해서 sum의 값을 합침 ... 이런식으로 첫번째 if문에 마지막까지 재귀시켜
값을 구함
*/
console.log(sumSalaries(company)); // 7700