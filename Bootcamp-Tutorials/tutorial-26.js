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
