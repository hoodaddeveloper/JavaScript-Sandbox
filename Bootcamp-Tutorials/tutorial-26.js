/// Weather converter ///

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