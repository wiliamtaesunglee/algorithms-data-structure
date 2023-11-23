function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let j = i - 1
    for (j; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = curr
    console.log(arr)
  }
  return arr
}

insertion([2, 1, 9, 76, 5]);



// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// a = insertionSort([2,1,9,76,4])
// // console.log(a)