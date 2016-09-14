'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

// sum of all the elements of the fibs array
const sum = (a, b) => {
  return a + b;
};

let sumFibs = fibs.reduce(sum, 0);

console.log('The sum of the first ten fibonacci numbers is ', sumFibs);

