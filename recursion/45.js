function sumRange(num) {
  console.log(num)
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log('result', sumRange(3));
