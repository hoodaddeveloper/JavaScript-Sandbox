///// Continue last lesson /////

let spaceship = {
  homePlanet: "Earth",
  color: "red",
};
let tryReassignment = (obj) => {
  obj = {
    identified: false,
    "transport type": "flying",
  };
  console.log(obj); // Prints {'identified': false, 'transport type': 'flying'}
};
tryReassignment(spaceship); // The attempt at reassignment does not work.
spaceship; // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
  identified: false,
  "transport type": "flying",
}; // Regular reassignment still works.

/// /// /// /// /// ///

let spaceship1 = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceship1);
remotelyDisable(spaceship1);
console.log(spaceship1);

///// Looping Through Objects with for...in /////

let spaceship2 = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

for (let crewMember in spaceship2.crew) {
  console.log(`${crewMember}: ${spaceship2.crew[crewMember].name}`);
}

for (let crewMember in spaceship2.crew) {
  console.log(
    `${spaceship2.crew[crewMember].name}: ${spaceship2.crew[crewMember].degree}`
  );
}

///// Advanced Objects Introduction /////

// How to use the "this" keyword.
// Conveying privacy in JavaScript methods.
// Defining "getters" and "setters" in objects.
// Creating factory functions.
// Using destructuring techniques.

///// The this Keyword /////

const cat = {
  name: "Whiskers",
  age: 6,
  makesound() {
    console.log("Miiaauu");
  },
  dietType: "herbivore",
  diet() {
    console.log(this.dietType);
  },
  getAge() {
    console.log(this.age);
  },
  getName() {
    console.log(this.name);
  },
};

cat.makesound(); // "Miaauu"
cat.diet(); // "herbivore"
cat.getAge(); // 6
cat.getName(); // "Whiskers"

/// /// /// /// /// ///

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  get provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

console.log(robot.provideInfo);

/// /// /// /// /// ///

const robot1 = {
  model: "1E78V2",
  energyLevel: 100,
  get provideInfo1() {
    console.log(
      `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    );
  },
};

robot1.provideInfo1;

///// Arrow Functions and this /////

const goat = {
  dietType: "herbivore",
  get Sound() {
    console.log("baaaaa");
  },
  diet: () => {
    console.log(this.dietType);
  },
};

goat.diet(); // Prints undefined because "this" is not available in the arrow function.
goat.Sound; // Prints "baaaaa"

/// /// /// /// /// ///

const robot2 = {
  energyLevel: 100,
  get checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot2.checkEnergy; // Prints "Energy is currently at 100%."

///// Privacy /////

const robot3 = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robot3._energyLevel = "high";
robot3.recharge();

///// Getters /////

const person = {
  _firstName: "John",
  _lastName: "Dee",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing a first name or a last name.";
    }
  },
};

// To call the getter method:
console.log(person.fullName); // 'John Doe'

/// /// /// /// /// ///

const project = {
  _id: 3453,
  _name: "Las Plagas",
  get Mission() {
    if (this._id || this._name) {
      console.log(`${this._id} ${this._name}`);
    } else {
      console.log(`This project has a secret mission but not identified`);
    }
  },
};

project.Mission;

/// /// /// /// /// ///

const robot4 = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return "My current energy level is " + this._energyLevel;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robot4.energyLevel);

///// Setters /////

const person2 = {
  _age: 27,
  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("You must assign a number to age");
    }
  },
};

person2.age = 30; // Sets the value of "age" to "30"
person2.age = "40"; // Logs: You must assign a number to age
person2._age = "forty-five"; // Sets the value of "_age" to "forty-five"

console.log(person2._age); // Logs: 30
console.log(person2._age); // Prints forty-five

/// /// /// /// /// ///

const robot5 = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

robot5.numOfSensors = 1001;
console.log(robot5.numOfSensors);

// Continue ...