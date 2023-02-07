///// Factory Functions /////

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(name);
      console.log(age);
      console.log(energySource);
      console.log(catchPhrase);
    },
  };
};

const monster = monsterFactory("Nemesis", 12, "X-Virus", "S.T.A.R.S");
monster.scare();

/// / /// / /// / /// / ///

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory("P-500", true);
tinCan.beep();

///// Property Value Shorthand /////

const monsterFactory2 = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

console.log(monsterFactory2("Hoodad", 23));

/// / ///

const monsterFactory3 = (name, age) => {
  return {
    name,
    age,
  };
};


console.log(monsterFactory2("Ali", 27));

/// / ///

function robotFactory4(model, mobile) {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
}

/// Use the property value shorthand and refactor the factory function:

const robotFactory5 = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Booogh Booogh");
    },
  };
};

const newRobot = robotFactory5('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

///// Destructured Assignment /////

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const residence1 = vampire.residence;
console.log(residence1); // Prints 'Transylvania'

const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences;
console.log(day); // Prints 'stay inside'

/// / ///

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
functionality.beep();

///// Built-in Object Methods /////

const robot3 = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot3);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot3)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot2 = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot3);

console.log(newRobot2);

// Continue ...