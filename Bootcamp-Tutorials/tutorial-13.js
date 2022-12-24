///// Introduction to Iterators ////////////////////////////////////////////////////////////

const fruits = ["mango", "papaya", "pineapple", "apple"];
fruits.forEach((item) => console.log("I want to eat a " + item));
// or
fruits.forEach(function (item) {
  console.log(`I want to eat a ${item}`);
});

///// The .map() Method ////////////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map((number) => number * 100 + 10 - 5);

console.log(numbers);
console.log(bigNumbers);

/// /// ///

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];
const secretMessage = animals.map((word) => word[0]);

/// /// ///

console.log(secretMessage.join(""));

const bigNumbers2 = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers2.map((number2) => number2 / 100);

console.log(smallNumbers);

///// The .filter() Method //////////////////////////////////////////////////////////////////

const words = ["chair", "music", "pillow", "brick", "pen", "door"];

const shortWords = words.filter((word) => {
  return word.length <= 4; // returns true if word is less than or equal to 4 characters
});

console.log(words);
console.log(shortWords);

/// /// ///

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNums1 = randomNumbers.filter((less) => less < 250); // returns numbers less than 250
const smallNums2 = randomNumbers.filter((more) => more > 250); // returns numbers less than 250

console.log(smallNums1);
console.log(smallNums2);

/// /// ///

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((more) => more.length > 7); // returns words longer than 7 characters

console.log(favoriteWords);
console.log(longFavoriteWords);

///// The .findIndex() Method /////////////////////////////////////////////////////////////////

const jumbledNums = [123, 10, 25, 78, 4, 9];

const lessThanTen = jumbledNums.findIndex((num2) => num2 < 10);
const lessThanEleven = jumbledNums.findIndex((num2) => num2 < 11);

console.log(lessThanTen); // 4
console.log(lessThanEleven); // 1

/// /// ///

const animals2 = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals2.findIndex((num3) => num3 === "elephant"); // returns index of 'elephant'
const startsWithS = animals2.findIndex((animal) =>
  animal[0] === "s" ? true : false
); // returns index of first animal starting with 's'

console.log(foundAnimal); // 7
console.log(startsWithS); // 6

///// Bonus Content ////////////////////////////////////////////////////////////////////////

for (var z = 0; z < 3; z++) {
  const log = () => {
    console.log(z);
  };
  setTimeout(log, 100); // logs 3, 3, 3
}

/// Change "var" to "let" to see the difference:

for (let z = 0; z < 3; z++) {
  const log = () => {
    console.log(z);
  };
  setTimeout(log, 100); // logs 0, 1, 2
}

///// Create a Method on an Object /////////////////////////////////////////////////////////////////

let duck = {
  name: "Avalac",
  numLegs: 2,
  sayName: (duckName) => console.log(`The name of this duck is ${duck.name}.`),
};

duck.sayName();

/// /// /// /// /// /// /// /// /// ///

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: func => `This dog has ${dog.numLegs} legs.`,
};

console.log(dog.sayLegs());

// Continue ...