///// Break & Continue ///////////////////////////////////////////////

let i = 0;

while (i <= 10) {
  // i = 0, i = 1, i = 2, ..., i = 10
  if (i == 5) {
    // i = 5
    break; // break from the loop
  }
  console.log(i);
  i++;
}

/// /// ///

while (i <= 20) {
  if (i == 10) {
    i++;
    continue; // continue to the next iteration of the loop
  }
  console.log(i);
  i++;
}

///// Objects /////////////////////////////////////////////////////////

// obj = {key1: value1, property2: value2};

let myFriend = {
  name: "Akbar", // String
  age: 30, // Number
  isMarried: false, // Boolean
  hobbies: ["Sports", "Cooking"], // Array
  address: {
    // Object
    city: "Shiraz",
    street: "Koshan",
    houseNumber: "14",
  },
  game: function () {
    // Function
    console.log("I love Games");
  },
};

myFriend.game();

///// Factory Fuctions /////////////////////////////////////////////////////////

function createHoodad() {
  return {
    name: "Hoodad",
    age: 27,
    isMarried: true,
    hobbies: "Game",
    address: "Shiraz",
  };
}

let object = createHoodad();
console.log(object);

///// Constructor Functions /////////////////////////////////////////////////////

function Circle(radius) {
  this.radius = radius;
  this.object = function () {
    console.log("I am a circle");
  };
}

const circle = new Circle(3);

console.log(circle);

/////////////////////////////////////////////////////////////////////////////////
console.log("//////////////////////////////");
/////////////////////////////////////////////////////////////////////////////////

const circle2 = {
  radius2: 1,
};

delete circle2.radius2;
delete circle2.draw2;

circle2.color = "red";
circle.draw2 = function () {};

console.log(circle2);

///// value types //////////////////////////////////////////////////////////////

// Primitive types:
// String, Number, Boolean, null, undefined, symbol

// Reference types:
// Object, Array (Arrays are also Objects), Function (Functions Are also Objects)

// We can say that we have two types of values:
// 1. Primitive values
// 2. Objects (Reference values)

/// /// /// /// /// ///

/* let x = 10;
let y = x;

console.log(y); // 10
console.log(x); // 10

x = 20;

console.log(x); // 20 */

/// /// /// /// /// ///

/* let x = {value: 10};
let y = x;

x.value = 20;

console.log(y.value); // 20
console.log(y); */

let number1 = 10;

const increase1 = (increaseFunc1 = (number1) => number1++);
console.log(number1); // 10

/// /// /// /// /// ///

let number2 = 10;

const increase2 = (increaseFunc2 = (number2) => {
  number2++;
  console.log(number2);
});

increaseFunc2(number2); // 11

/// /// /// /// /// ///

let obj = { value: 12 };

function func(obj) {
  obj.value++;
  console.log(obj.value);
}

func(obj); // 13

///// Clone Object //////////////////////////////////////////////////////////////

const another = { ...obj };
console.log(another); // { value: 13 }

///// Spread Operator //////////////////////////////////////////////////////////

let Akbar = {
  name: "Akbar",
  age: 30,
  isMarried: false,
  hobbies: ["Sports", "Cooking"],
  address: {
    city: "Shiraz",
    street: "Koshan",
    houseNumber: "14",
  },
  game: function () {
    console.log("I love Games");
  },
};

/// Clone:

let AlbarClone = { ...Akbar };
console.log(Akbar);

///// Random Number /////////////////////////////////////////////////////////////

const randomNumber1 = getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(randomNumber1(40, 50));

const randomNumber2 = Math.floor(Math.random() * 10);
console.log(randomNumber2);


/// /// /// /// /// ///

const randomNumber3 = getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(randomNumber1(100, 110));

// Continue ...