function capitalizeWords (list) {
  const [first, ...rest] = list;

  if (list.length === 0) return [];

  return [first.toUpperCase(), ...(capitalizeWords(rest))]
}

let words = ['i', 'am', 'learning', 'recursion'];
const a = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(a);
