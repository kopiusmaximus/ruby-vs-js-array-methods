'use strict';

// Alternating between Ruby and JavaScript, write scripts, in bin/fibonacci.rb and
// bin/fibonacci.js, that:
//
// calculates the sum of elements of fibs
// calculates the product of elements of fibs (excluding zero).
// calculates the sum of the odd elements of fibs
// calculates the product of the even elements of fibs(excluding zero).

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

// calculates the sum of elements of fibs

let sumFibs = fibs.reduce((previous, current) => {
  return previous + current;
}, 0);

// => 88

console.log('The sum of the first ten fibonacci numbers is', sumFibs);

// calculates the product of elements of fibs (excluding zero).

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let productFibs = fibs.reduce((previous, current) => {
  let product = previous * current;
  if (product === 0) {
    return 1;
  }
  else {
    return product;
  }
}, 1);

// => 2227680

console.log('The product of the first ten fibonacci numbers is', productFibs);

// calculates the sum of the odd elements of fibs

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let fibsOdds = [];

fibs.forEach((current) => {
  if (current % 2 !== 0) {
    fibsOdds.push(current);
  }
});

let sumOdds = fibsOdds.reduce((previous, current) => {
  return previous + current;
}, 0);

// calculates the product of the even elements of fibs(excluding zero).
