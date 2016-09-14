'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

// sum of all the elements of the fibs array
const sum = (a, b) => {
  return a + b;
};

let sumFibs = fibs.reduce(sum, 0);

console.log('The sum of the first ten fibonacci numbers is ', sumFibs);

// product of fibs excluding zero
const notZero = (number) => {
  return number !== 0;
};

const product = (a, b) => {
  return a * b;
};

let prodFibs = fibs.filter(notZero).reduce(product, 1);

console.log('The product of the first ten fibonacci numbers, excluding zero, is ', prodFibs);

// sum of the odd elements of the fibs array
const odd = (number) => {
  return number % 2 !== 0;
};

let sumOdd = fibs.filter(odd).reduce(sum);

console.log('The sum of the first five odd fibonacci numbers, is ', sumOdd);

