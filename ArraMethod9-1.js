function shuffle(arr) {
  return arr.sort(()=> Math.random() - 0.5)
}

let arr = [1, 2, 3];

console.log(shuffle(arr))
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...