/////     Codecademy     /////

// An statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8

let mood = "sleepy";
let tirednessLevel = 8;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}

// Truthy and Falsy

/* 
  The answer will be "false" if the values are: 
  - "0"
  - Empty strings like "" or ''
  - "null" which represent when there is no value at all
  - "undefined" which represent when a declared variable lacks a value
  - "NaN", or Not a Number
*/

let wordCount = "Yes"; // Change this line.

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

// The code below checks if username is defined and assigns a default string if it is not

let userName = ""; // Change this line
let defaultName;

if (userName) {
  defaultName = userName;
} else {
  defaultName = "Stranger";
}

console.log(defaultName); // Prints: Stranger

// 2nd & shorter example using the || operator

let userName2 = ""; // Change this line
let defaultName2 = userName2 || "Stranger";

console.log(defaultName2); // Prints: Stranger

// Ternary Operator

let isLocked = false; // Change this line

if (isLocked) {
  console.log("You will need a key to open the door.");
} else {
  console.log("You will not need a key to open the door.");
}

// 2nd example using the ternary operator

let isLocked2 = true; // Change this line

isLocked2
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

// 3rd example using the ternary operator

let favoritePhrase = "Love That!";

favoritePhrase === "Love That!" // you can use "!==" to check if the value is not equal to the string
  ? console.log("I love that!")
  : console.log("I don't love that!");

// Continue in tutorial-4.js ...