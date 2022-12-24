///// The .reduce() Method /////

const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue; // multiply each value in the array
});

console.log(summedNums); // 80

/// /// /// /// /// ///

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  // reduce the array to a single value
  console.log("The value of accumulator: ", accumulator); // the value of accumulator is the value of the previous iteration
  console.log("The value of currentValue: ", currentValue); // the value of currentValue is the value of the current iteration
  return accumulator + currentValue; // add each value to the accumulator
}, 10); // second argument is the initial value of the accumulator

console.log(newSum); // 24

///// Iterator Documentation /////

const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
});

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

///// Choose the Right Iterator /////

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

/*

.forEach():
is used to execute the same code on every element in an array
but does not change the array and returns undefined.

.map():
executes the same code on every element in an array
and returns a new array with the updated elements.

.filter():
checks every element in an array to see if it meets certain criteria
and returns a new array with the elements that return truthy for the criteria.

.findIndex():
returns the index of the first element of an array that satisfies a condition in the
callback function. It returns -1 if none of the elements in the array satisfies the condition.

.reduce():
iterates through an array and takes the values of the elements and returns a single value.

*/

// Continue ...