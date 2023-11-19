const capitalize = (str) => {
  const [first, ...rest] = [...str];
  return [first.toUpperCase(), ...rest].join('');
}

function capitalizeFirst (n) {

  const [first, ...rest] = n;

  if (n.length === 0) return [];

  return [capitalize(first), ...capitalizeFirst(rest)];
}

const a = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(a);
