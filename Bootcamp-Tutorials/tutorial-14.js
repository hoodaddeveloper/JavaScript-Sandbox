///// Make Code More Reusable with the this Keyword /////

let myDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
  sayName: function () {
    console.log(`My name is ${myDog.name}`);
  },
};

myDog.sayName();

/// /// /// /// /// /// /// /// /// /// ///

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

console.log(dog.sayLegs());

///// Define a Constructor Function /////

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird(); // Creates a new instance of the Bird constructor function

console.log(blueBird); // Logs the blueBird object
console.log(blueBird.name); // Logs the name property of the blueBird object
console.log(blueBird.color); // Logs the color property of the blueBird object
console.log(blueBird.numLegs); // Logs the numLegs property of the blueBird object

/// /// /// /// /// ///

function Dog() {
  this.name = "Woofoo";
  this.color = "white";
  this.numLegs = 2;
}

let whiteDog = new Dog();

console.log(whiteDog); // Logs the whiteDog object
console.log(whiteDog.name); // Logs the name property of the whiteDog object
console.log(whiteDog.color); // Logs the color property of the whiteDog object
console.log(whiteDog.numLegs); // Logs the numLegs property of the whiteDog object

///// Check For The Presence of an Element With indexOf() /////

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

console.log(fruits.indexOf("dates")); // Returns -1
console.log(fruits.indexOf("oranges")); // Returns 2
console.log(fruits.indexOf("pears")); // Returns 1
console.log(fruits.indexOf("apples")); // Returns 0

/// /// /// /// /// ///

// 1:
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// 2:
function quickCheck2(arr2, elem2) {
  return arr2.indexOf(elem2) >= 0 ? true : false;
}

console.log(quickCheck2(["squash", "onions", "shallots"], "mushrooms"));

// 3:

function quickCheck3(arr3, elem3) {
  return arr3.indexOf(elem3) != -1;
}

console.log(quickCheck3(["squash", "onions", "shallots"], "mushrooms"));

// Continue ...