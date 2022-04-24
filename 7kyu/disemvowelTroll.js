function disemvowel(str) {
  let arr = str.match(/[^aiuoe]/gi);
  return arr.join("")
}

console.log(disemvowel("Assalamu alekum"));
 