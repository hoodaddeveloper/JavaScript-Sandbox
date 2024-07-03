/// /// Weather converter /// ///

// Kelvin temperature
const kelvin = 100;
// Convert Kelvin to Celsius
const celsius = kelvin - 273;
// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Round down the Fahrenheit temperature number
fahrenheit = Math.floor(fahrenheit);
// Convert Celsius to Newton
let newton = celsius * (33 / 100);
// Round down the Newton temperature number
newton = Math.floor(newton);

console.log(`The temperature is ${kelvin} degrees Kelvin.
The temperature is ${celsius} degrees Celsius.
The temperature is ${fahrenheit} degrees Fahrenheit.
The temperature is ${newton} degrees Newton.`);

/// /// freeCodeCamp /// ///

function demo(esm) {
  return esm;
}

console.log(demo("Hello!"));

/// /// /// /// /// ///

function padRow(name) {
  return name;
}

console.log(padRow("Hoodad!"));

/// /// /// /// /// ///

function addTwoNumbers(a, b) {
  return a + b;
};

let sum = 5 + 10;
console.log(sum);

/// /// /// /// /// ///

function demo(name) {
  const title = "Professor ";
  return title + name;
};

console.log(demo("Hasanzadeh"));

/// /// Dog years test /// ///

// My age
const myAge = 29;
// Early years
let earlyYears = 2;

earlyYears *= 10.5;
// Later years - my age
let laterYears = myAge - 2;

laterYears *= 4;
// Dog years
let dogYears = laterYears * 4;

console.log(earlyYears);
console.log(laterYears);
console.log(dogYears);

/// /// If statement /// ///

function ifTrue() {
  if (true) {
    console.log("The message will print.");
  }
}

ifTrue();

/// /// /// /// /// ///

let sale = true;
sale = true;

if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}

/// /// /// /// /// ///

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

/// /// /// /// /// ///

let stopLight = "green";
pedestrians = 1;

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

/// /// /// /// /// ///

let day = 'Saturday';

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

/// /// /// /// /// ///

let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}