
// This is a practice to understand
// JavaScript Basics

///// Java Script String Methods List /////

let myArray = [1, 2, 3, "a", "b", "c"];

myArray.charAt(); // Returns the character at the specified index (position)
myArray.charCodeAt(); // Returns the Unicode of the character at the specified index (position)
myArray.concat(); // Joins two or more arrays
myArray.indexOf(); // Searches the array for an item and returns the index of the item
myArray.endsWith(); // Checks if a string ends with specified string/characters
myArray.lastIndexOf(); // Searches the array for an item and returns the last index of the item
myArray.join(); // Joins all elements of an array into a string
myArray.lastIndexOf(); // Searches the array for an item and returns the last index of the item
myArray.pop(); // Removes the last element from an array and returns that element
myArray.push(); // Adds new items to the end of an array and returns the new length
myArray.reverse(); // Reverses the order of the elements in an array
myArray.shift(); // Removes the first element from an array and returns that element
myArray.slice(); // Extracts a section of an array and returns a new array
myArray.sort(); // Sorts the elements of an array
myArray.splice(); // Adds/Removes items to/from an array
myArray.unshift(); // Adds new items to the beginning of an array and returns the new length
myArray.toString(); // Converts an array to a string
myArray.valueOf(); // Returns the primitive value of an array
myArray.join(); // Joins all elements of an array into a string
myArray.split(); // Splits a string into an array of substrings
myArray.toLocaleString(); // Converts an array to a string, using a locale-specific separator
myArray.toString(); // Converts an array to a string
myArray.toSource(); // Returns a string representation of an array

// Declaring Variables
const firstName = "Hoodad"; // String
let lastName = "Wesker";
let nickName = "TheWesker";
let age = 27; // Number
let isSleeping = false; // Boolean
const skills = ["Valorant", "Overwatch", "Developer"]; // Array
let generalInfo = {
  weight: 55,
  height: 177,
  hairColor: "Black",
  isAlive: true,
}; // Object

// Reassign the variable
nickName = "TheWesker"; // String

// Print Output
console.log("First Name : " + firstName); // First Name : Hoodad
console.log("Last Name : " + lastName); // Last Name : Wesker
console.log("NickName : " + nickName); // NickName : hoodaddeveloper
console.log("Age : " + age); // Age : 27
console.log("Sleeping : " + isSleeping); // Sleeping : false
console.log("Skills : " + skills); // Skills : Valorant, Overwatch, Developer
console.log("General Info : " + generalInfo); // General Info : [object Object]
console.log("Weight : " + generalInfo.weight); // Weight : 55

// Practicing JavaScript Data Types:

/////     String     /////

let string1 = "Welcome";
let string2 = "Hello World";
let string3 = "1, 2, 3, 4, 5, 6";
console.log(string1 + string2 + string3);

/////     Number     /////

let myAge = 27;
let myMoney = 205.5;
console.log(myAge + myMoney);

/////     boolean     /////

let data = true;
/* let data = false;*/
if (data) {
  console.log("Data is true");
} else {
  console.log("Data is false");
}

/////     Null     /////

let n = null;
console.log(n * 10);
/* The Answer is "0", because the value of "n" is "null". */

/////     Undefined     /////

let a;
console.log(a * 10);
/* The Answer is "NaN", because the value of "a" is "undefined & it is not a Number". */

/////     Symbol     /////

let b = Symbol("b");
let c = Symbol("c");
/* console.log(b != c); */
console.log(b === c);

/////     BigInt     /////

let x = BigInt(Number.MAX_SAFE_INTEGER);
console.log(x);

/////     Object     /////

let myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
console.log(myCar);

/////     Arithmetic Operators     /////

console.log(27 + 3.5);
console.log(2022 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters.
console.log("Codecademy".toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log("    Remove whitespace   ".trim());

// Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.
console.log(Math.random() * 100);

// Inside the console.log(), put the existing Math.random() * 100 code inside the parentheses of Math.floor().
console.log(Math.floor(Math.random() * 100));

// A method that returns the smallest integer greater than or equal to a decimal number.
console.log(Math.ceil(43.8));

// This method checks if a number is an integer or not.
console.log(Number.isInteger(2017)); // true
console.log(Number.isInteger(2017.5)); // false

/////     Variables     /////

var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

/////     let Variable     /////

let changeMe = true;
changeMe = false;
console.log(changeMe);

/////     const Variable     /////

const entree = "Enchiladas";
console.log(entree);
// entree = 'Tacos'; // This will give an type error

/////     Mathematical Assignment Operators     /////

let w = 4;
w = w + 1;
console.log(w); // 5

const product = 2.0 * 2.5;
console.log(product); // 5.0

const money = 5000 + 5000;
console.log(money); // 10000

let q = 5;
q += 1; // Can be written as q = q + 1
console.log(q); // 6

let s = 6;
s -= 2; // Can be written as s = s - 2
console.log(s); // 4

let f = 10;
f /= 5; // Can be written as f = f / 2
console.log(f); // 2

let g = 20;
g *= 2; // Can be written as g = g * 2
console.log(g); // 10

// Continue in tutorial-1.js ...