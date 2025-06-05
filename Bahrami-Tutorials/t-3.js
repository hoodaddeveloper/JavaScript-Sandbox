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

/// /// /// /// /// ///

const person = {
  firstName: "Hoodad",
  lastName: "Wesker",
  age: 30,
  coding: function () {
    console.log("Hoodad is coding")
  },
  skills: {
    html: 100,
    css: 90,
    js: 80,
    react: 70
  }
}

console.log(typeof person)
console.log(person.firstName)
console.log(person.age)
console.log(person.skills)
console.log(person.skills.html)
person.coding()

// Function construcctor

function Person() {
  this.firstName = "Albert",
    this.lastName = "Wesker",
    this.age = 45,
    this.coding = function () {
      console.log("Albert is coding")
    },
    this.skills = {
      html: 100,
      css: 100,
      js: 100,
      react: 100
    }
}

const personX = new Person()

console.log(typeof personX)
console.log(personX.firstName)
console.log(personX.age)
console.log(personX.skills)
console.log(personX.skills.html)
personX.coding()

/// /// /// /// /// ///

function addNumber(n1, n2) {
  console.log(n1 + n2)
}

addNumber(7, 5)

/// /// /// /// /// /// /// ///
/// JavaScript ES6 Classes ///
/////////////////////////////

class ClassNameY {
  // code
}

class ClassNameX {
  constructor() { }
  // code
}

let objectName = new ClassNameX()

/// /// /// /// /// ///

class Car {
  constructor(name, year, color) {
    this.name = name
    this.year = year
    this.color = color
  }
  age() {
    let d = new Date()
    return d.getFullYear() - this.year
  }
  info() {
    return `
    Car Name: ${this.name}
    Car Year: ${this.year}
    Car Age: ${this.age()} Years
    Car Color: ${this.color}
    `
  }
}

let car1 = new Car("Porsche", 2010, "Black")
console.log(car1)
console.log(car1.age())
console.log(car1.info())

/// JavaScript ES6 Class Inheritance ///

class Human {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class Student extends Human {
  constructor(name, age, field, school) {
    super(name, age)
    this.field = field
    this.school = school
  }
}

class Athele {

}

let obj = new Student("Hoodad", 30, "Computer", "Umbrella")
console.log(obj)