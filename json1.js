let user = {
  name: "John Smith",
  age: 35
};

let str = JSON.stringify(user)

let obj = JSON.parse(str)

console.log(obj)