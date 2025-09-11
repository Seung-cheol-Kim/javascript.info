function work(a, b) {
  console.log( a + b ); 
}

function spy(func){
  function wrapper(...args){
    wrapper.calls.push(args)
    return func.call(this, ...args) // func.apply도 가능
  }
  wrapper.calls = [];
  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); 
}