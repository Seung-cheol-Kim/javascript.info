function aclean(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toLowerCase().split('').sort().join(''));
  }
  let set = Array.from(new Set(newArr));
  // At this point, set = [ 'anp', 'aceehrst', 'aer' ]

  let resultObj = {}; // 결과를 임시로 저장할 객체

  // 원본 배열을 순회합니다.
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');

    // set에 포함된 키이고, 아직 resultObj에 추가되지 않았다면
    if (set.includes(sorted) && !resultObj[sorted]) {
      resultObj[sorted] = word; // key로는 정렬된 단어, value로는 원본 단어를 저장
    }
  }

  // 객체의 값들만 모아서 배열로 반환합니다.
  return Object.values(resultObj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // [ 'nap', 'teachers', 'ear' ]