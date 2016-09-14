'use strict';

let loadPeople = require('../lib/people.js');

// loadPeople().then((people) => {
//   let count = people.reduce((m /*, p */) => m + 1, 0);
//   console.log(`count: ${count}, length: ${people.length}`);
// }).catch((error) => console.log(error));

loadPeople().then((people) => {
  // people is array of objects
  // count the total number of people

  console.log('Total people (length property): ', people.length);

  const increment = (accumulator) => {
    return accumulator + 1;
  };

  const isFemale = (person) => {
    return person.gender === 'f';
  };

  let female = people.filter(isFemale).reduce(increment, 0);

  console.log('Total females (using reduce): ', female);
}).catch((error) => console.log(error));
