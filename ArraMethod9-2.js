
/*
 피셔-예이츠 셔플(Fisher-Yates shuffle) 알고리즘
  피셔-예이츠 셔플 알고리즘은 배열 끝 요소부터 시작해 앞으로 하나씩 나아가면서 
  해당 요소 앞에 있는 임의의 요소와 해당 요소를 바꿔치기하는 알고리즘입니다.
  */
function shuffle(arr) {
  for(let i = 0; i < arr.length; i++){
    let j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


let arr = [1, 2, 3];

console.log(shuffle(arr))
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...