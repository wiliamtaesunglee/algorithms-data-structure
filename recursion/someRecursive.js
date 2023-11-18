// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

const a = someRecursive([1,2,3,4], isOdd) // true
const b = someRecursive([4,6,8,9], isOdd) // true
const c = someRecursive([4,6,8], isOdd) // false
const d = someRecursive([4,6,8], val => val > 10); // false

function someRecursive(list, cb){
  const [first, ...rest] = list;
  if (cb(first)) return true;
  if (rest.length === 0) return false;
  return someRecursive(rest, cb);
}

console.log(a,b,c,d);
