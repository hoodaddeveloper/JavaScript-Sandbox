/* 
  This is a practice to understand
  JavaScript Basics.
  First File was the helloworld.js
*/

/////     Literals in JavaScript     /////

// Object:     {}
// Boolean:    true , false
// String:     "" , ''
// Template:   ``

/////     The Increment and Decrement Operator     /////

let a = 10;
a++;
console.log(a); // 11

let b = 10;
b--;
console.log(b); // 9

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

/////     String Concatenation with Variables     /////

let myPet = "Short hair Cat";
console.log("I own a Pet and she is a " + myPet + ".");

/////     String Interpolation     /////

// First Message
const myMessage1 = `This is my first Message writen in a single line and will be shown in the output just like this.`;
console.log(myMessage1);

// Second Message
const myMessage2 = `This is my second Message.

This will be in some different lines with spaces & will be shown
just like I wrote it like this.

This is because of using Literals in JavaScript ES6.`;

console.log(myMessage2);

// Using Placeholder
let myName = "Hoodad";
let myCity = "Shiraz";
let food = "Kebab";

console.log(`My name is ${myName},
I live in ${myCity},
and my favrite food is ${food}.`);

/////     typeof operator     /////

let variable1 = "Playing around with typeof.";
console.log(typeof variable1); // String

let variable2 = 2008;
console.log(typeof variable2); // Number

let variable3 = true;
console.log(typeof variable3); // Boolean

let variable4 = null;
console.log(typeof variable4); // Every Object is derived from null value, and therefore typeof operator returns "object" for it.

let variable5;
console.log(typeof variable5); // Undefined

let variable6 = Symbol("a");
console.log(typeof variable6); // Symbol

let variable7 = { age: "27", height: "174" };
console.log(typeof variable7); // Object

let variable8 = function x() {};
console.log(typeof variable8); // function

/////     Convert celsius to Fahrenheit     /////

// The forecast today is 293 Kelvin
const kelvin = 293;

// The celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

// This is the equation to calculate Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// More Examples

let myEx1 = "This is the first sentence. " + "This is the second sentence.";

let myEx2 = "This is the first sentence. ";
myEx2 += "This is the second sentence.";

console.log(myEx1);
console.log(myEx2);

const someAdjective = "very awsome for me.";
let myEx3 = "Learning to code is ";
myEx3 += someAdjective;

console.log(myEx3);

// Continue in tutorial-2.js ...