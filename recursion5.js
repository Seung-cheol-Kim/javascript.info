let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList(list){
  let arr = []
  for(let i = list; i; i = i.next){
    arr.push(i)
  }
  for(let j = arr.length; j > -1; j--){
    console.log(arr[j])
  }
}
printList(list)

function printListRec(list){
  if(list.next) {
    printListRec(list.next)
  }
  console.log(list)
}
printListRec(list)