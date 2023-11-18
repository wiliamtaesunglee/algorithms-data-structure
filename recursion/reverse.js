function reverse(value) {
 const reversed = [];
 
  function rev(fragment) {
    if (fragment.length === 0) return;
    const [first, ...rest] = fragment;
    reversed.unshift(first);
    rev(rest);
  }

  rev([...value]);

  return reversed.join('');
}

console.log(reverse('awesome'))
