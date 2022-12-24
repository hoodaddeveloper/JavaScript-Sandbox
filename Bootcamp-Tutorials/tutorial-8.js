///// Function Expressions /////

const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater();
console.log(plantNeedsWater("Wednesday")); // "true"

///// ES6 Arrow Functions /////

const newFunction = () => {
  return "Hello ES6 World";
};

console.log(newFunction()); // "Hello ES6 World"

// Concise Body Arrow Functions

const arrowFunction1 = () => {}; // Zero Parameter
const arrowFunction2 = (parameter) => {}; // One Parameter
const arrowFunction3 = (parameter1, parameter2, parameter3) => {}; // Two or more Parameters
const arrowFunction4 = (number) => number + number; // Single line function does not need curly braces

// Example:
const arrowFunction5 = (day) => (day === "Wednesday" ? true : false);

console.log(arrowFunction5("Wednesday")); // "true"
console.log(arrowFunction5("sunday")); // "false"

///// Profile Lookup /////

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },

  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },

  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },

  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such Property";
    }
  }
  return "No such Contact";
}

let data = lookUpProfile("Kristian", "likes");

console.log(data);

///// Use Recursion to Create a Countdown /////

// Example 1:

function countdown1(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown1(n - 1);
    arr.unshift(n); // Adds the number to the beginning of the array
    return arr;
  }
}

console.log(countdown1(6)); // [6, 5, 4, 3, 2, 1]

// Example 2:

function countdown2(n) {
  return n < 1 ? [] : [n].concat(countdown2(n - 1));
}

console.log(countdown2(6)); // [6, 5, 4, 3, 2, 1]

///// Use Recursion to Create a Range of Numbers /////

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
}

console.log(rangeOfNumbers(6, 7));

// Continue in tutorial-9.js ...