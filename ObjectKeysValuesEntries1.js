function sumSalaries(salaries) {
  let arr = Object.values(salaries)
  let result = 0
  for(let item of arr){
    result += item
  }
  return result
}

// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
// }

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650