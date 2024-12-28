/* Learning JavaScript ES6 for React */

/* Ternary Operator */
let age = 25;
age > 18 ? console.log("You are older than 18!") : console.log("You are under 18!")

let result, average = 12.75;
average > 12 ? result = "Pass!" : result = "Fail!"
console.log(result)

/// /// /// /// /// ///

/* Backtick */
let myName = "Hoodad"
let myAge = 30
console.log(`My name is ${myName} and I am ${myAge} years old.`)

/// /// /// /// /// ///

// ES6 Functions

function hello1(esm) {
  console.log("Hello " + esm)
}

hello1("Mohammad")

/// /// /// /// /// ///

let hello2 = function (adad) {
  return "Hello my age is " + adad
}

console.log(hello2(30))

/// /// /// /// /// ///

let hello3 = (name) => console.log(`Hello ${name}`)

hello3("Wesker")

/// /// /// /// /// ///

// Rest operator

function sum(...hoodad) {
  console.log(hoodad)
}

sum(5, 5, 5)

// Spread operator

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]

console.log(arr3)