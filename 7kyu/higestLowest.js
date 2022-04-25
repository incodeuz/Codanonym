function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return Math.max(...numbers) + " " + Math.min(...numbers);
}

highAndLow("31 553 6 2 211");
