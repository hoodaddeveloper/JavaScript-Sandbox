///// The For Loop /////

for (let counter = 0; counter < 4; counter++) {
  console.log(counter); // 0 1 2 3
}

// / //

for (let i = 5; i < 11; i++) {
  console.log(i); // 5 6 7 8 9 10
}

// / //

for (let i = 11; i > 0; i--) {
  console.log(i); // 11 10 9 8 7 6 5 4 3 2 1 0
}

///// Looping through Arrays /////

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]); // Grizzly Bear Sloth Sea Lion
}

// / //

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let x = 0; x < vacationSpots.length; x++) {
  console.log('I would love to visit ' + vacationSpots[x]);
} // I would love to visit Bali I would love to visit Paris I would love to visit Tulum

///// Nested Loops /////

const myArray = [6, 19, 3];
const yourArray = [3, 81, 2];

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]); // Both arrays have the number: 3
    }
  }
}

/// // / // ///

const bobsFollowers = ["Rose", "Akbar", "Jasem", "laura"];
const tinasFollowers = ["Jasem", "Akbar", "Susan"];
const mutualFollowers = [];

for (let t = 0; t < bobsFollowers.length; t++) {
  for (let z = 0; z < tinasFollowers.length; z++) {
    if (bobsFollowers[t] === tinasFollowers[z]) {
      console.log(tinasFollowers[z]); // Jasem Akbar
      console.log(mutualFollowers.push(bobsFollowers[t]));
    }
  }
}

///// The While Loop /////

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while (currentCard != ['spade']) {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard); // diamond spade heart club
}

///// Do...While Statements /////

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 11);
 
console.log(countString);

// // //

let cupsOfSugarNeeded = 20;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded) {
};

///// The Break Statement /////

for (let i = 0; i < 99; i++) {
  if (i > 3) {
     break; // stops the loop after the 4th iteration
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');

// // //

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') { // if the current value is 'Notorious B.I.G.'
    break; // break out of the loop
  }
};

console.log("And if you don't know, now you know.");

// Continue ...