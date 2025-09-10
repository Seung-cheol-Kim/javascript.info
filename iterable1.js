let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if(this.current <= this.to){
        return { done: false, value: this.current++}
    }
    else{
        return { done: true}
    }
  }
}
let num = 0
for(num of range){
    num+= num
}
console.log(num)
