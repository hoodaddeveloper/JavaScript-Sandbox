///// Accessing Properties /////

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
};

console.log(spaceship.homePlanet); // 'Earth'
console.log(spaceship.color); // silver

/// /// /// /// /// ///

let spaceShip = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

let crewCount = spaceShip.numCrew;
let planetArray = spaceShip.flightPath;

console.log(crewCount); // 5
console.log(planetArray); // ['Venus', 'Mars', 'Saturn']

///// Bracket Notation /////

let Spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Duty": true,
  homePlanet: "Earth",
  numCrew: 5,
};

console.log(Spaceship["Active Duty"]); // true
console.log(Spaceship["Fuel Type"]); // 'Turbo Fuel'
console.log(Spaceship["numCrew"]); // 5
console.log(Spaceship["homePlanet"]); // 'Earth'
console.log(Spaceship["!!!!!!!!!!!"]); // undefined

/// /// /// /// /// ///

let spaceSHIP = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let fuel = spaceSHIP["Fuel Type"];
let isActive = spaceSHIP["Active Mission"];

console.log(isActive); // true
console.log(fuel); // 'Turbo Fuel'

///// Property Assignment /////

const myFriedns = {
  Tehran: "Farzin",
  Shiraz: "Yunes",
  Abadan: "Alireza",
  Kazeroon: "Hossein",
  Germany: "Peyman",
};

delete myFriedns.Abadan; // delete the property "Abadan"
myFriedns.USA = "Jack"; // add a new property "USA"
myFriedns.Kazeroon = "Abbas"; // update the value of the property "Kazeroon"

console.log(myFriedns);

/// /// /// /// /// ///

let SpaceShip = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

SpaceShip.color = "glorious gold"; // update the value of the property "color"
SpaceShip.numEngines = 10; // add a new property "numEngines"
delete SpaceShip["Secret Mission"]; // delete the property "Secret Mission"

/// /// /// /// /// ///

const myCar = {
  "car make": "Ford",
  "the model": "Mustang",
  "Build year": 1969,
  "car color": "silver",
  "Top Speed": "120mph",
};

myCar["Build year"] = 2014; // update the value of the property "Build year"
delete myCar["Top Speed"]; // delete the property "Top Speed"
myCar["car color"] = "White"; // update the value of the property "car color"
myCar["Top Speed"] = "220 KM"; // add a new property "Top Speed"

console.log(myCar);

///// Methods /////

const alienShip = {
  alienInvade() {
    console.log(
      "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon."
    );
  },
};

alienShip.alienInvade();

/// /// /// /// /// ///

const math = {
  a: 5,
  b: 5,
  sum() {
    console.log(math.a + math.b);
  },
};

math.sum();

/// /// /// /// /// ///

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
let Ship = {
  retreat() {
    console.log(retreatMessage);
  },

  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

Ship.retreat();
Ship.takeOff();

///// Nested Objects /////

const space = {
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      "Our monitors": ["HD", "4K"],
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

let deg = space.crew.captain.degree;
let display = space.nanoelectronics.computer["Our monitors"][1];
console.log(deg); // "Computer Engineering"
console.log(display); // "4K"

/// /// /// /// /// ///

let spaceship2 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

let capFave = spaceship2.crew.captain["favorite foods"][0];
console.log(capFave); // cookies

spaceship2.passengers = [
  { name: "Hoodad", age: "27", job: "Engineer" },
  { name: "Tracer", age: "25", job: "Mechanic" },
  { name: "Inspector", age: "28", job: "Dctor" },
];

console.log(spaceship2);

///// Pass By Reference /////

const obj1 = {
  name: "Abbas",
  age: 30,
};

let changeName = (cn) => (cn.name = "Wesker");
changeName(obj1);

console.log(obj1.name);

// Continue ...