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
  for(let i = list; i; i = i.next){
    console.log(i)
  }
}
printList(list)

function printListRec(list){
  console.log(list)
  if(list.next) {
    return printListRec(list.next)
  }
}
printListRec(list)