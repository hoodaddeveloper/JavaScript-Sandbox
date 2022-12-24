///// Arrays /////

const hobbies = ["Ali", "Hoodad", "Akbar"];
console.log(hobbies);

///// Accessing Elements /////

const famousSayings = [
  'Fortune favors the brave.',
  'A joke is a very serious thing.',
  'Where there is love there is life.'
];

const listItem = famousSayings[0]; // 'Fortune favors the brave.'
console.log(listItem);

console.log(famousSayings[0]); // 'Fortune favors the brave.'
console.log(famousSayings[2]); // 'Where there is love there is life.'
console.log(famousSayings[2]); // undefined

///// Update Elements /////

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'; // replaces 'tomatoes' with 'avocados'
console.log(groceryList); // ['bread', 'avocados', 'milk']

///// Arrays with let and const /////

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments); // ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha']

condiments = ['Mayo']; // reassigns the array to a new array
console.log(condiments);  // ['Mayo']

utensils[3] = 'Spoon'; // reassigns the array to a new array
console.log(utensils[3]); // 'Spoon'

///// The .length property /////

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); // 3

///// The .push() Method /////

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push("play", "sport"); // adds 'play' and 'sport' to the end of the array
console.log(chores); // ['wash dishes', 'do laundry', 'take out trash', 'play', 'sport']

///// The .pop() Method /////

const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores2.pop(); // removes the last element from the array
console.log(chores2); // ['wash dishes', 'do laundry', 'take out trash', 'cook dinner']

///// More Array Methods /////

const groceryList2 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList2.shift(); // removes the first element from the array
groceryList2.unshift("popcorn"); // adds 'popcorn' to the beginning of the array
console.log(groceryList2.slice(1, 4)); // ['bananas', 'coffee beans', 'brown rice']

groceryList2.indexOf('pasta'); // returns the index of 'pasta' in the array
const pastaIndex = groceryList2.indexOf('pasta'); // assigns the index of 'pasta' to the variable 'pastaIndex'
console.log(pastaIndex); // 5

///// Arrays and Functions /////

const concept = ['arrays', 'can', 'be', 'mutated'];
const changeArr = (arr) => arr[3] = 'MUTATED'; // changes the fourth element of the array to 'MUTATED'

changeArr(concept);
console.log(concept); // ['arrays', 'can', 'be', 'MUTATED']

const removeElement = (newArr) => newArr.pop();
removeElement(concept); // removes the last element of the array
console.log(concept); // ['arrays', 'can', 'be']

///// Nested Arrays /////

 // 1:

const nestedArr = [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12]]; // creates a nested array
console.log(nestedArr[1]); // [2, 3]
console.log(nestedArr[2]); // [4, 5, 6, 7]
console.log(nestedArr[3]); // [8, 9, 10, 11, 12]
console.log(nestedArr[3][2]); // 12
console.log(nestedArr[2][2]); // 6

// 2:

let numberClusters = [[1, 2], [3, 4], [5, 6,]];
const target =  numberClusters[2][1]; // 6

///// Loops /////

const vacationSpots = ["Hoodad","Hasan", "Ali"];
console.log(vacationSpots[0]); // 'Hoodad'
console.log(vacationSpots[1]); // 'Hasan'
console.log(vacationSpots[2]); // 'Ali'

// Continue ...