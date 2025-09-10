function topSalary(salaries) {
  let arr = Object.entries(salaries)
  let result = 0
  let name = null
  arr.forEach(([key,value])=> {
    if(value > result){
      result = value
      name = key
    }
  })
  return name
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries))