///// filter() method /////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const greaterThanFive = numbers.filter((value) => value > 5);
console.log(greaterThanFive);

/// /// /// /// /// ///

const names = [
  "Ali",
  "Hassan",
  "Hamed",
  "Reza",
  "Sara",
  "Akbar",
  "Hoodad",
  "Sue",
  "Clair",
  "Leon",
];
const longerThanFour = names.filter((value) => value.length > 4);
console.log(longerThanFour);

/// /// /// /// /// ///

const users = [
  { name: "Albert Wesker", age: 36 },
  { name: "Leon S. Kennedy", age: 27 },
  { name: "Jill Valentine", age: 33 },
  { name: "Chris Redfield", age: 35 },
  { name: "Hoodad Wesker", age: 27 },
];

const agePlus30 = users.filter((user) => user.age > 30); // filter the users with age greater than 30
const ageUnder30 = users.filter((user) => user.age < 30); // filter the users with age less than 30

console.log(agePlus30);
console.log(ageUnder30);

///// map() method /////

const arr = [10, 20, 30];

twice = arr.map((value) => value * 2); // multiply each value by 2

console.log(twice);

/// /// /// /// /// ///

const products = ["Apple", "Orange", "Banana", "Pear"];
const items = products.map((product) => `<li>${product}</li>`); // create a list of products with <li> tag
console.log(items);

const html = items.join(" "); // join the items into a string with space
console.log(html);

/// /// /// /// /// ///

const myFriends = ["Sue", "Amanda", "Victoria", "Bob", "Tom"];
const myFriendsOjbect = myFriends.map((friends) => ({ value: friends })); // create an object for each friend
console.log(myFriendsOjbect);

///// What is "this" /////

// method => A function that is attached to an object
// This => The object that the function is attached to

const video = {
  title: "The Lord of the Rings",
  play() {
    console.log(this);
  },
};

video.play();

/// /// /// /// /// ///

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("The Lord of the Rings");

///// Function declaration /////

function walk() {
  console.log("walk");
}

walk();

///// Function expression /////

const run = function () {
  console.log("run");
};

run();

/// /// /// /// /// ///

function sum(a, b) {
  // function declaration
  return a + b; // return the sum of a and b
}

console.log(sum(1, 5)); // 6

/// /// /// /// /// ///

const minus = function (c, d, e) {
  // function expression
  return c - d + e;
};

console.log(minus(3, 4, 4)); // 3

/// /// /// /// /// ///

function allArguments(w, x) {
  // function declaration
  console.log(arguments); // arguments is an array
  let total = 0; // create a variable to store the sum of all arguments
  for (let value of arguments) {
    // loop through all arguments
    total += value; // add each argument to the total
  }
  return total; // return the total
}

console.log(allArguments(1, 10, 10)); // 21

/// /// /// /// /// ///

let myArguments = function (y, z) {
  console.log(arguments);
  let all = 1;
  for (let value of arguments) {
    all *= value;
  }
  return all;
};

console.log(myArguments(2, 4, 10));

///// reduce() method /////

const Nums = [-1, 0, 2, 3];

const reduced = Nums.reduce(function (ac, value) {
  // reduce the array to a single value
  return ac + value; // add each value to the accumulator
}, 0);

console.log(reduced); // -1 + 0 + 2 + 3 = 5

///// With arrow function /////

const reduced2 = Nums.reduce((ac, value) => ac + value, 0);
console.log(reduced2);

///// default method /////

function bankInterest(principal, interest = 20, years = 2) {
  return ((principal * interest) / 100) * years; // calculate the interest
}

console.log(bankInterest(10000));

/// /// /// /// /// ///

let person = {
  fName: "Sara",
  lName: "Conner",
  age: 33,
  fullname() {
    return `${this.fName} ${this.lName}`;
  },
};

console.log(`Her name is ${person.fullname()} and she is ${person.age} years old.`);

// Continue ...