/// Weather converter ///

// Kelvin temperature
const kelvin = 0;
// Convert Kelvin to Celsius
const celsius = kelvin - 273;
// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Round down the Fahrenheit number
fahrenheit = Math.floor(fahrenheit);
// Convert Newton to Celsius
let newton = celsius * (33 / 100);

console.log(`The temperature is ${kelvin} degrees Kelvin.
The temperature is ${celsius} degrees Celsius.
The temperature is ${fahrenheit} degrees Fahrenheit.`);