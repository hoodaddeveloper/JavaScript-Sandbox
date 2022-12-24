///// Kalagar Tutorials /////

// Objects

const person = {
  name: "Hossein",
  surname: "Kalagar",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  work() {
    console.log("I am working...");
  },
};

let getName = person.name;
let getSurename = person["surname"];
let getAge = person.age;
let getHobbies = person["hobbies"];

console.log(getName);
console.log(getSurename);
console.log(getAge);
console.log(getHobbies);
person.work();

// Arrays

let friends = ["Hossein", "Ali", "Sara"];

console.log(friends[0]); // Hossein
console.log(friends.length); // 3

friends[0] = "Kalagar"; // Kalagar
console.log(friends); // ["Kalagar", "Ali", "Sara"]

friends[3] = 313; // 313
console.log(friends); // ["Kalagar", "Ali", "Sara", 313]
console.log(friends.length); // 4

// Fuctions

function car1(name, model) {
  console.log(`This is my ${name} ${model}.`);
}

function math(number) {
  return number * number - number + number;
}

let answer = math(10);
console.log(answer);
//or
console.log(math(10));

// Arrow Fuction

car1("BMW", "X7");

let car2 = (name, model) => console.log(`This is my other ${name} ${model}.`);
car2("Mercedes", "E-Class");

// Operators

let y = 10;
let z = 20;

console.log(++y); // 11
console.log(y++); // 11
console.log(y); // 12

console.log(y < z); // true
console.log(y == z); // false
console.log(y > z); // false

// Ternary Operator & Logical Operator

let myAge = 27;
let myMoney = 80;
let myPoints = 900;
let inBlackList = false;

let access =
  myAge >= 18 && (myMoney >= 80 || myPoints >= 1000) && inBlackList != true
    ? "You have access"
    : "You do not have access";

console.log(access);

// Switch...Case

let power = 1000;

switch (power) {
  case 10:
    console.log("Bronze");
    break;
  case 100:
    console.log("Silver");
    break;
  case 1000:
    console.log("Gold");
    break;
  default:
    console.log("Nothing");
    break;
}

// For Loop

for (let index = 12; index <= 24; index++) {
  console.log("===> " + index);
}

// for ...in

let students = ["Hossein", "Ali", "Sara", "Saman", "Sara"];

for (const key in students) {
  console.log("The person " + students[key] + " is your friend.");
}

// Objects Basics

let myPet = {
  name: "Bella",
  age: 2,
  color: "White",
  breed: "British shorthair",
  isHappy() {
    console.log("I am happy.");
  },
};

myPet.isHappy();

// Create Object

let anotherPet = new Object(); // Create Object with Object()
console.log(anotherPet); // {} __proto__: Object

let theObj1 = Object.create(null); // Create Object with null prototype
console.log(theObj1); // {} (empty object)

let theObj2 = Object.create(Object.prototype); // Create a default Object with prototype
console.log(theObj2); // {} default prototype

let theObj3 = Object.create({
  name: "Bella",
  age: 2,
  color: "White",
  breed: "British shorthair",
  isHappy() {
    console.log("I am happy.");
  },
});

console.log(theObj3); // {name: "Bella", age: 2, color: "White", breed: "British shorthair"} & __proto__: Object

// Access & Inheritance

let country = {
  name: "Iran",
  capital: "Tehran",
  population: "1.4 billion",
  language: "Farsi",
  currency: "Rial",
  getInfo() {
    console.log(
      `${this.capital} is the capital of ${this.name} and has a population of ${this.population}.
      The language spoken in ${this.name} is ${this.language} and the currency is ${this.currency}.
      The country is located in ${this.location}.`
    );
  },
};

country.population = "85 million";
country.location = "west Asia";
country.getInfo();

let anotherCountry = Object.create(country);
anotherCountry.SecondCity = "Shiraz";
console.log(anotherCountry);

// Testing Objects

// 1:
console.log("firstName" in country); // false (not in)
console.log("population" in country); // true (in)
// 2:
console.log(country.hasOwnProperty("lastName")); // false (not in)
console.log(country.hasOwnProperty("language")); // true (in)
// For anotherCountry;
console.log("SecondCity" in anotherCountry); // true (in)
console.log(anotherCountry.hasOwnProperty("SecondCity")); // true (in)
// 3:
console.log(country.propertyIsEnumerable("arWar")); // false (not in)
console.log(country.propertyIsEnumerable("currency")); // true (in)
// 4:
console.log(country.language === undefined); // false (not undefined)
console.log(country.currency !== undefined); // true (not undefined)

// Enumerating Objects

for (x in country) {
  console.log("This is " + x);
}

// Getter & Setter

let laptop = {
  brand: "Asus",
  model: "Gaming Pro",
  price: "5000",
  get info() {
    return `My laptop is an ${this.brand} ${this.model} model and it costs ${this.price} dollars. `;
  },
  set changePrice(value) {
    this.laptop.price = value.toUpperCase();
  },
};

laptop.price = 10000;
laptop.info;
console.log(laptop.price);

// Extending Object

_laptop = { ...laptop }; // Create a new object with the same properties as laptop
_laptop.brand = "Lenovo";
_laptop.model = "Legion Y740";

console.log(_laptop);

// Extended Object Literal Syntax

let myPC = {
  Graphic: "Nvidia 3090",
  CPU: "Intel i9",
  RAM: "32GB",
};

let otherPc = {
  Graphic: "Nvidia 5090",
  CPU: "Intel i11",
  RAM: "64GB",
};

let futurePc = { ...myPC, ...otherPc }; // Create a new object with the same properties as laptop

console.log(futurePc);

// Create Array

let myArray2 = [
  { x: 1, y: 2, z: 3 },
  { a: 4, b: 5, c: 6 },
  [12, 23, 34, 45, 56],
];

console.log(myArray2[1], myArray2[2]);

// Using spread operator

myArray3 = [33, 44, 55, 66, 77, 88, 99];
let SO = [22, ...myArray3, 111];

console.log(SO);

/// // /// // ///

let digits = "123456489023878ffmvjksj45hrjffj3k"; // Create an array of digits
let newDigits1 = [...digits]; // Create a new array with the same digits

let newDigits2 = [...new Set(digits)]; // Create a new array with the unique digits (no duplicates)
console.log(newDigits2);

/// // /// // ///

let mess = "2349586720495867204598670245986720459867240895670245867";

let clean = [...new Set(mess)];
console.log(clean);

// Array Constructor

let a = new Array(11); // Create empty an array with 11 elements
a[2] = 13; // Add element to array

console.log(a); // [, , , , , , , , , , , 13]

/// // /// // ///

let safeWay = Array.from(mess); // Create a new array with the same digits (no duplicates)
console.log(safeWay);

let cleanWay = [...new Set(safeWay)]; // Create a new array with the unique digits (no duplicates)
console.log(cleanWay);

// Read & Write Array Elements

let ar = [1, 2, 3, 4];
let i = ar[3]; // Read element at index 3
console.log(i); // 4
ar[3] = 5; // Write element at index 3
ar["Hoodad"] = 6;
console.log(ar); // [1, 2, 3, 5]

/* if (ar.length > 5) {
  console.log("Bigger than 3.");
} else {
  console.log("Not bigger than 3.")
} */

if (ar.length > -1) {
  console.log("It exists.");
}

/// // /// // ///

console.log([1, 2, 3, 4, 5].length); // 5

aa = ["Hoodad", "Wesker", 3, 4, 5];
aa.length = 3; // Change the length of the array to 3
console.log(aa); // [Hoodad, Wesker, 3]

aa.length = 7; // Change the length of the array to 7 (add 4 empty elements)
console.log(aa); // [Hoodad, Wesker, 3, , , , ]

// Adding & Deleting Elements

let bb = [1, 2, 3, 4, 5, 6];

let push = bb.push(123); // Add element to the end of the array
console.log(bb); // [1, 2, 3, 4, 5, 6, 123]

bb.unshift(321); // Add element to the beginning of the array
console.log(bb); // [321, 1, 2, 3, 4, 5, 6, 123]

bb.pop(); // Remove element from the end of the array
console.log(bb); // [321, 1, 2, 3, 4, 5, 6]

bb.shift(); // Remove element from the beginning of the array
console.log(bb); // [1, 2, 3, 4, 5, 6]

delete bb[1]; // Delete element at index 1
console.log(bb); // [1, , 3, 4, 5, 6]

// Iterating Arrays

let letters = [..."Hello Umbrella"];
let document = [];

for (const letter of letters) {
  console.log((document += letter));
}

/// // /// // ///

let upperCase = "";

letters.forEach((letter) => {
  upperCase += letter;
});

console.log(upperCase);

/// // /// // ///

let HU = "";

for (let index = 0; index < letters.length; index++) {
  const letter = letters[index];
  HU += letter;
}

console.log(HU);

// Using .map()

let upperCase2 = "";
letters.map((letter) => (upperCase2 += letter.toUpperCase()));

console.log(upperCase2);

// Using .filter()

let ARRAY = [11, 22, 33, 44, 55, 66];

let f = ARRAY.filter((x) => x > 22); // Create a new array with elements that are greater than 22
let c = ARRAY.find((x) => x > 22); // Find the first element that is greater than 22

console.log(f); // [33, 44, 55, 66]
console.log(c); // 33

// Array Methods

let s = [1, 2, 3, 4, 5, 6];
console.log(s.slice(2, 4)); // Prints from 2 to 4 but not 2: [3, 4]
console.log(s.slice(4, 6)); // Prints from 4 to 6 but not 4: [5, 6]
console.log(s.includes(6)); // Returns true because the array contains the element 6
console.log(s.includes(9)); // Returns false because the array does not contain the element 9

// Create Functions

function add(a, b) {
  console.log(a + b);
}

add(3, 3); // 6

const barboolak = function (a, b) {
  console.log(a ** b);
};

barboolak(2, 16); // 65536

const ARROW = (a, b) => console.log(a / b);
ARROW(9, 3); // 3

// Argument & Parameters

function fullname(fname = "John", lname = "Dee") {
  // If no arguments are passed, use default values
  /* fname = fname || "John";
  lname = lname || "Dee"; */
  console.log(fname + " " + lname);
}

fullname("Ali"); // Ali Dee

/// // /// // ///

function func(a, b, ...c) {
  // Rest Operator
  for (const key in c) {
    // Iterate over the rest of the arguments
    console.log(key); // Print the index of the argument
  }
}

func("A", "B", "C", 1, 2, 3, 4, 5); // Prints the index of the argument

// Closures

let scope = "Global"; // Create a variable outside of the function

function check() {
  let scope = "local"; // Create a variable inside of the function
  function f() {
    return scope;
  }
  return f;
}

console.log(check()()); // Prints "local"

// Finish!