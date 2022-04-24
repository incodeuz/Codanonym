function openOrSenior(data) {
  let res = [];
  data.map((value) => {
    if (value[0] >= 55 && value[1] > 7) {
      res.push("Senior");
    } else {
      res.push("Open");
    }
  });
  return res;
}

openOrSenior([
  [12, 53],
  [62, 13],
  [11, 44],
]);
