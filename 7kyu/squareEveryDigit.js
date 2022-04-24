function squareDigits(num) {
  if (num === 0) {
    return 0;
  } else {
    let a = `${num}`.split("");
    const res = a.map((value) => {
      return Math.round(Math.pow(value, 2));
    });
    let number = res.join("");
    return +number;
  }
}

console.log(squareDigits(2112));
