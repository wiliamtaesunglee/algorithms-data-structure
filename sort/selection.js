function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let l = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[l] > arr[j]) {
        l = j
      }
    }
    if (l !== i) {
      [arr[i], arr[l]] = [arr[l], arr[i]]
    }
  }
  return arr
}
const a = [14, 3, 5, 2, 20, 4, 33, 12]
console.log(selection(a))