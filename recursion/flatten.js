const isArray = (item) => Array.isArray(item);

function flatten(toFlat){
  const flat = [];

  const makeItFlat = (list) => {
    list.forEach(item => {
      if (isArray(item)) {
        makeItFlat(item);
      } else {
        flat.push(item);
      }
    });
  }

  makeItFlat(toFlat);

  return flat
}

const a = flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
const b = flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
const c = flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

console.log(a, b, c)
