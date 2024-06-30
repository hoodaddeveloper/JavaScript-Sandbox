/// Weather converter ///

// Kelvin temperature
const kelvin = 293;
// Convert Kelvin to Celsius
const celsius = kelvin - 273;
// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Round down the Fahrenheit number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log("The temperature is " + celsius + " degrees Celsius");
console.log("The temperature is " + fahrenheit + " degrees Fahrenheit");