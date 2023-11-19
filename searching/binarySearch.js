function binarySearch(arr, val){
  let left = 0; 
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  
  while (left < right) {
    if (arr[middle] === val) {
      return middle;
    }
    
    if (val < arr[middle]) {
      right = middle;
      middle = Math.floor((left + right) / 2);
    }
  
    if (val > arr[middle]) {
      left = middle;
      middle = Math.floor((left + right) / 2) + 1;
    }
  }

  return -1;
}

const a = binarySearch([1,2,3,4,5],2) // 1
const b = binarySearch([1,2,3,4,5],3) // 2
const c = binarySearch([1,2,3,4,5],5) // 4
const d = binarySearch([1,2,3,4,5],6) // -1

console.log(a, b, c, d)
