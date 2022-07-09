/////     Convert celsius to Newton     /////

// The celsius is 200 degrees
let celsius = 200;

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);

/////     Dog Years Project     /////

// My Age
const myAge = 27;

// Early Years
let earlyYears = 2;
earlyYears *= 10.5;

// Subtracting "myAge"
let laterYears = myAge - 4;

// Multiplying "laterYears"
laterYears *= 4;

// My Age in Dog Years
let myAgeInDogYears = myAge + laterYears;

// Lowercase letters of my Name
let myName = "HOODAD".toLowerCase();

// Display my Age in Dog Years
console.log(`My name is ${myName}. I am ${myAge} years old in
human years which is ${myAgeInDogYears} years old in dog years.`);

// // // // //     SOME MORE PRACTICES FROM FREECODECAMP.ORG     // // // // //

/////     Use Bracket Notation to Find the First Character in a String     /////

let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Use bracket notation to find the first character in lastName

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName); // L

// Use Bracket Notation to Find the Last Character in a String

let myFirstName = "Hoodad";
let lastLetterOfLastName = myFirstName[myFirstName.length - 1];
console.log(lastLetterOfLastName); // d

// Use Bracket Notation to Find the Third Character in a String

let myArray = ["John", "Jane", "Mark", "Bob"];
let finder = myArray[2];
console.log(finder); // Mark

// Use Bracket Notation to add 45 to the Array of Numbers
const myArr = [18, 64, 99];
myArr[0] = 45; // myArr[0] is 18, so it will be 45
console.log(myArr); // [45, 64, 99]

// Using bracket notation select an element from "theArray" such that "myData" is equal to "13"

const theArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = theArray[3][1];
console.log(myData); // 13

// Use "push()" to add a value to the end of the array

const array1 = [
  ["John", 23],
  ["cat", 2],
];

array1.push(["dog", 3]);
console.log(array1); // [['John', 23], ['cat', 2], ['dog', 3]]

// 2nd Example
const array2 = [
  ["Hoodad", 27],
  ["Ali", 20],
  ["Alex", 30],
];

array2.push(12345);
console.log(array2); // [['Hoodad', 27], ['Ali', 20], ['Alex', 30], 12345]

// Use "pop()" to remove a value from the end of the array

const array3 = [
  ["John", 23],
  ["cat", 2],
];
const removedFromArray3 = array3.pop();

console.log(array3); // ['John', 23]
console.log(removedFromArray3); // ['cat', 2]

// Use "shift()" to remove the first value from the array

const array4 = [
  ["John", 23],
  ["cat", 2],
];
const removedFromArray4 = array4.shift();
console.log(array4); // ['cat', 2]
console.log(removedFromArray4); // ['John', 23]

// Use "unshift()" to add a value to the beginning of the array

const array5 = [["John", 23], ["dog", 3], ["Akbar", 20]];
array5.shift(); // removes the first element
console.log(array5); // [['dog', 3], ['Akbar', 20]]

array5.unshift(["Paul", 35]); // adds the element to the beginning
console.log(array5); // [['Paul', 35], ['dog', 3], ['Akbar', 20]]

/////     Functions     /////

// A Function that accepts one argument, multiplies it by 5, and returns the new value

function timesFive(number) {
  return number * 5;
}

const answer = timesFive(5); // 25

// Continue in tutorial-3.js ...