function unique(arr) {
  let array = []
  arr.forEach(item => {
    if(!array.includes(item)){
      array.push(item)
    }
  })
  return array
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) );