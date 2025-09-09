function getAverageAge(arr){
  let result = 0
  arr.forEach(item => {
    result += item.age
  })
  return result / arr.length

  // return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) );