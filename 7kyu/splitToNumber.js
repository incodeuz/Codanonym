function digitize(n) {
  let res = `${n}`.split("");
  let result = res.map((value) => +value);
  console.log(result.reverse());
}
digitize(124352);
