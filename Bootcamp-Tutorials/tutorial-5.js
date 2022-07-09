/////     New project from Codecademy     /////

let randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 1000
console.log(Math.floor(Math.random() * 1000)); // Print the random number to the console

/////     Now the whole project from Codecademy     /////

let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false; // Set the value of the variable registeredEarly to "false" or "true"
const age = 15; // Set the value of the variable age to a number

if (age > 18 && registeredEarly) {
  raceNumber += 1000; // Add 1000 to the raceNumber if the user is older than 18 and registered early
}

if (age > 18 && registeredEarly) { // If the user is older than 18 and registered early
  console.log(`Your race will begin at 9:30 am & your race number is ${raceNumber}`);
} else if (age > 18 && !registeredEarly) { // If the user is older than 18 and NOT registered early
  console.log(`Your race will begin at 11:00 am & your race number is ${raceNumber}`);
} else if (age < 18) { // If the user is younger than 18
  console.log(`Your race will begin at 12:30 pm & your race number is ${raceNumber}`);
} else { // If the user is exactly 18 years old
  console.log(`Your are 18 years old? Please see the registration desk.`);
}

/////     Calling a Function     /////

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks(); // You cann call the function as many times as you want

/////     Parameters and Arguments in a Function     /////

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks("Cole"); // Prints "Thank you for your purchase Cole! We appreciate your business."

/////     Default Parameters in ES6     /////

// 1st Example

function greeting (name = 'stranger') { // If the user doesn't enter a name, the default value of name is "stranger"
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

// 2nd Example

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList() // Output: Remember to buy eggs

/////     Return     /////

// To pass back information from the function call, we use a "return" statement

function monitorCount(rows, columns) { // The function monitorCount takes two parameters, rows and columns
  return rows * columns; // The function returns the value of rows * columns
}

const numOfMonitors = monitorCount(5, 4); // The variable numOfMonitors is equal to the value of monitorCount(5, 4)
console.log(numOfMonitors); // Output: 20

/////     Helper Functions     /////

function monitorCount(rows, columns) { // The function monitorCount takes two parameters, rows and columns
  return rows * columns;
};

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200; // The function costOfMonitors takes two parameters and returns the value of monitorCount(rows, columns) * 200
};

const totalCost = costOfMonitors(5, 4); // The variable totalCost is equal to the value of costOfMonitors(5, 4)
console.log(totalCost); // Output: 4000

// Continue in tutorial-6.js ...