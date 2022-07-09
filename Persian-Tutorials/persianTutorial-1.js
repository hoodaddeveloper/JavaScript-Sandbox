/////    var, let & const example    /////

var fname = "Hasan"; // var is a global variable
var fname = "Ali"; // changed the value of var to "Ali"
fname = "Samad"; // changed the value of fname to "Samad"

let age = "40"; // let is a local variable
// let age = "40"; // error: can't change the value of let
age = "50"; // changed the value of age to "50"

const isMarried = true; // const is a constant variable
// const isMarried = true; // error: can't change the value of const
// isMarried = false; // error: can't change the value of isMarried

console.log(fname);
console.log(age);
console.log(isMarried);

//////     Object example     //////

let myObject = {
  marke: "BMW",
  model: "X7",
  year: 2022,
  motor: {
    type: "V8",
    horsepower: "500",
    torque: "500"},
  adress: ["Robert-Koch-Strasse", "Berlin", "Germany"],
  color: "white",
  price: "gratis!",
  isNew: true,
}

// console.log(myObject.adress[1]); // prints "Berlin"
// console.log(myObject.motor.type); // prints "V8"

/////     Function example     /////

// example 1

function myFun1(name, age) {
  console.log(`Salam ${name}, are you ${age} years old?`);
}

myFun1("Hoodad", 27); // prints "Salam Hoodad, are you 27 years old?"
myFun1("Akbar", 20); // prints "Salam Akbar, are you 20 years old?"
myFun1("Asghar", 17); // prints "Salam Asghar, are you 17 years old?"

// example 2

function myFun2() {
  console.log("Hello");
  return "World"; // return is used to return a value from the function
  console.log("byebye") // this line is not executed
}

myFun2(); // prints only "Hello"
console.log(myFun2()); // prints only "Hello" and "World"

// example 3

function myMath(num) { // "num" is a parameter
  return num * num; // "return" is used to return a value from the function
}

console.log(myMath(6)); // prints 36
console.log(myMath(10)); // prints 100
console.log(myMath(50)); // prints 2500

/////     More about Numbers     /////

let result;

let num1 = 4;
let num2 = 2;

result = num1 + num2; // result = 6
result = num1 - num2; // result = 2
result = num1 * num2; // result = 8
result = num1 ** num2; // result = 16
result = num1 / num2; // result = 2
result = num1 % num2; // result = 0

result = 2 + 4 * 2; // result = 10
result = (2 + 4) * 2; // result = 12

result = 10;
result += 3; // result = 13
result -= 3; // result = 7

result = 5;
result++; // result = 6 // increment by 1
++result; // result = 6
result--; // result = 4 // decrement by 1
--result; // result = 4

console.log(result);

// More about maths

res = Math.PI; // res = 3.141592653589793
res = Math.E; // res = 2.718281828459045

res = Math.round(2.4); // res = 2, rounds to the nearest integer
res = Math.round(2.8); // res = 3, rounds to the nearest integer
res = Math.floor(2.8); // res = 2 allways rounds down
res = Math.ceil(2.2); // res = 3 allways rounds up
res = Math.sqrt(64); // res = 8 (Radical of 64)
res = Math.abs(-10); // res = 10 (absolute value of -10) - (Gahdre Motlagh)
res = Math.pow(2, 6); // res = 64 (Yani 2 be tavane 64)
res = Math.min(2, 3, 4, -1, 0); // res = -1 (min value of 2, 3, 4 and -1)
res = Math.max(2, 3, 4, -1, 0); // res = 4 (max value of 2, 3, 4 and -1)
res = Math.random(); // res = random number between 0 and 0.9

// If you want to get a number between 0 and 20:
res = Math.floor(Math.random() * 21); // res = random number between 0 and 20

// If you want to get a number between a range, for example between 10 and 20:
res = Math.floor(Math.random() * (21 - 10)) + 10; // res = random number between 10 and 20

console.log(res);

// Continue in persianTutorial-2,js ...