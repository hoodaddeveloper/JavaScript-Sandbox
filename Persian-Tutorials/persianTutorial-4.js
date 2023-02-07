// Function decration //

function sum(a, b, c) {
  return a + b - c;
}

console.log(sum(1, 2, 4));

// Function expression //

let result = function (x, y, z) {
  return x + y - z;
};

console.log(result(3, 4, 5));

//////////////////////////////////////////////////////////////////////////////////////////////

let arr = [1, 2, 3, 4, 5];

let result2 = arr.reduce(function (s, d) {
  return s + d;
});

console.log(result2); // 15 (1 + 2 + 3 + 4 + 5)

//////////////////////////////////////////////////////////////////////////////////////////////

let arr2 = [5, 7, 0, 0, 1];

console.log(
  arr2.reduce(function (e, f) {
    return e + f;
  })
);

//////////////////////////////////////////////////////////////////////////////////////////////

const summ = (...result3) => {
  let summ = 0;
  for (item of result3) {
    summ += item;
  }
  return summ;
};

console.log(summ(2.5, 2.5, 4, 6)); // 15

// / // / // More of Objects - Constructiors // / // / //

// 1:

function Person() {
  this.fName = "Hoodad";
  this.lName = "Wesker";
  this.age = 27;
}

let hoodad = new Person();

console.log(hoodad.lName);
console.log(hoodad.age);

// 2:

/* function Person2(fName2, lName2) {
  this.firstName = lName2;
  this.lastName = fName2;
  this.age2 = 30;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

let hoodad2 = new Person2("Saideh", "Dehghani");
let Akbar = new Person2("Akbar", "Khan");

console.log(hoodad2.firstName);
console.log(Akbar.lastName);
console.log(hoodad2.getFullName()); */

// 3:

class Person2 {
  constructor(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
  }

  sayHello() {
    return `Hi my name is ${this.firstName} ${this.lastName}`;
  }
}

let Saideh = new Person2("Saideh", "Dehghani", 60);

console.log(Saideh.sayHello());

// Continue ...