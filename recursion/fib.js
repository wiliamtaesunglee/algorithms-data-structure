function fib(n) {
  const list = [1];
  function calc(value) {
    if (list.length === n) {
      return;
    }

    const nextItem = list.slice(-2).reduce((a, b) => a + b, 0); 
    
    list.push(nextItem);
    calc(value - 1); 
  }

  calc(n)

  return list.slice(-1)[0];
}


console.log(fib(1)); // 1
console.log(fib(4)); // 3

console.log(fib(35)); // 3
