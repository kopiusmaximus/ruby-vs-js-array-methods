'use strict';

let loadPeople = require('../lib/people.js');

// loadPeople().then((people) => {
//   let count = people.reduce((m /*, p */) => m + 1, 0);
//   console.log(`count: ${count}, length: ${people.length}`);
// }).catch((error) => console.log(error));

loadPeople().then((people) => {
  // people is an array of objects
  // count the total number of people

  // console.log('Total people (length property): ', people.length);
  //
  const increment = (accumulator) => {
    return accumulator + 1;
  };
  //
  // const isFemale = (person) => {
  //   return person.gender === 'f';
  // };
  //
  // let female = people.filter(isFemale).reduce(increment, 0);
  //
  // console.log('Total females (using reduce): ', female);
  //
  // const isMale = person => {
  //   return person.gender === 'm';
  // };
  //
  // let male = people.filter(isMale).reduce(increment, 0);
  //
  // console.log('Total males (using reduce): ', male);

  // count all the people over 30

  const isOver30 = (person) => {
    return person.age() > 30;
  };

  let over30 = people.filter(isOver30).reduce(increment, 0);

  console.log('Total people over 30 (using reduce): ', over30);

  // count all the people younger than 10

  const isUnder10 = (person) => {
    return person.age() < 10;
  };

  let under10 = people.filter(isUnder10).reduce(increment, 0);

  console.log('Total people under 10 (using reduce): ', under10);

}).catch((error) => console.log(error));
