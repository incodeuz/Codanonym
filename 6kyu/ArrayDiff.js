function arrayDiff(a, b) {
  if (b.length == 0) {
    return a;
  } else {
    return a.filter((val) => !b.includes(val));
  }
}
console.log(arrayDiff([1, 3, 2, 3, 4], [1,2]));
