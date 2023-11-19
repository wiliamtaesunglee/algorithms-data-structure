function linearSearch(items, value){
  for (let i = 0; i < items.length; i++) {
    if (items[i] === value) return i;
  }
  return -1;
}
