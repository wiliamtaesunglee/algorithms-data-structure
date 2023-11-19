function nestedEvenSum (obj) {
  const numbers = [];

  const getNumbers = (list) => {
    Object.values(list).forEach(value => {
      if (typeof value === 'number') {
        numbers.push(value);
        return 
      }
      if (typeof value === 'object') {
        return getNumbers(value);
      }
    })
  }

  getNumbers(obj);
  
  return numbers
    .filter(num => num % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1), 6)
console.log(nestedEvenSum(obj2), 10)
