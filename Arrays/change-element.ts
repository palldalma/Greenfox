export {};

let numbers = [1, 2, 3, 8, 5, 6];

numbers.map(function (e, i) {
  if ((i = 3)) {
    numbers[i] = 4;
  }
});

console.log(numbers);
