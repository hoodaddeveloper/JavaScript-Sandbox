// Else If Statements

let season = 'spring';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// Examples from freeCodeCamp

function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10)); // The answer should be "Equal" or "Not Equal"

// Other example from freeCodeCamp

function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(7)); // The answer should be "Equal" or "Not Equal"

// Other example from freeCodeCamp for comparing two different values

function compareEquality(a, b) {
  if (a === b) { // Change this line or the values in the console.log
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, 10)); // The answer should be "Equal" or "Not Equal"

// Other example from freeCodeCamp using "&&" logical Ooerator

function testLogicalAnd(val) {

  if (val <= 50 && val >= 25 ) {
      return "Yes";
    }
  return "No";
}

console.log(testLogicalAnd(10)); // The answer should be "Yes" or "No"

/////     The switch keyword     /////

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;

  case 'second place':
    console.log('You get the silver medal!');
    break;

  case 'third place':
    console.log('You get the bronze medal!');
    break;

  default:
    console.log('No medal awarded.');
    break;
}

// Other example

function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break; // break is used to stop the execution of the code after the case is met

    case 4:
    case 5:
    case 6:
      return "Mid";
      break;

    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }
  return answer; // This is the default return value if the switch statement is not met
}

sequentialSizes(1); // The answer should be "Low"

/////     Some mini Projects from Codecademy JavaScript     /////

// You will see random results from the following code

let userName = "Alex";
if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log("Hello");
}

let randomNumber = (Math.floor(Math.random() * 8));

switch (randomNumber) {
  case 0:
  console.log('It is certain');
  break;

  case 1:
  console.log('It is decidedly so');
  break;

  case 2:
  console.log('Reply hazy try again');
  break;

  case 3:
  console.log('Cannot predict now');
  break;

  case 4:
  console.log('Do not count on it');
  break;

  case 5:
  console.log('My sources say no');
  break;

  case 6:
  console.log('Outlook not so good');
  break;

  case 7:
  console.log('Signs point to yes');
  break;

  default:
  console.log('Signs point to yes');
  break;
}

// Continue in tutorial-5.js ...