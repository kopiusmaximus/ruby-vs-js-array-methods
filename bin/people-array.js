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

  const isMale = (person) => {
    return person.gender === 'm';
  };

  let male = people.filter(isMale).reduce(increment, 0);
  // people.filter(!isFemale).reduce(increment, 0); // WRONG
  // this does not answer the question "How many males?", instead it answers
  // the question "How many not females?"
  // also, syntax error

  console.log('Total males (using reduce): ', male);

  // all the people older than me
  const isOlder = (person) => {
    return person.age() > 30;
  };

  let older = people.filter(isOlder).reduce(increment, 0);

  console.log('Number of people older than me: ', older);

  // all the people younger than me
  const isYounger = (person) => {
    return person.age() < 30;
  };

  let younger = people.filter(isYounger).reduce(increment, 0);

  console.log('Number of people younger than me: ', younger);

  // all the people whose first and last names begin with the same letter

  const isAlliterative = (person) => {
    return person.given_name[0] === person.surname[0];
  };

  let alliterative = people.filter(isAlliterative).reduce(increment, 0);

  console.log('Number of alliteratives: ', alliterative);

}).catch((error) => console.log(error));
