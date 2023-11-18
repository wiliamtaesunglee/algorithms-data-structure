const a = isPalindrome('awesome') // false
const b = isPalindrome('foobar') // false
const c =  isPalindrome('tacocat') // true
const d = isPalindrome('amanaplanacanalpanama') // true
const e = isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  const reversed = [];

  function reverse(v) {
    if (v.length === 0) return;
    const [first, ...rest] = v;
    reversed.unshift(first);
    reverse(rest);
  }

  reverse([...str]);

  return reversed.join('') === str;
}

console.log(a, b, c, d, e);
