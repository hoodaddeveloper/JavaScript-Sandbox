///// Function Expressions /////

const plantNeedsWater = function (day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater();
console.log(plantNeedsWater('Wednesday')); // "true"

///// ES6 Arrow Functions /////

const newFunction = () => {
  return 'Hello ES6 World';
}

console.log(newFunction()); // "Hello ES6 World"

// Concise Body Arrow Functions

const arrowFunction1 = () => {}; // Zero Parameter
const arrowFunction2 = parameter => {}; // One Parameter
const arrowFunction3 = (parameter1, parameter2, parameter3) => {}; // Two or more Parameters
const arrowFunction4 = number => number + number; // Single line function does not need curly braces

// Example:
const arrowFunction5 = day => day === 'Wednesday' ? true : false;

console.log(arrowFunction5('Wednesday')); // "true"
console.log(arrowFunction5('sunday')); // "false"