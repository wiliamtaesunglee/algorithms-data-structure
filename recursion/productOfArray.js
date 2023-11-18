function productOfArray(list) {
 if (list.length === 0) return 1;
  const [first, ...rest] = list;
  return first * productOfArray(rest);
}
