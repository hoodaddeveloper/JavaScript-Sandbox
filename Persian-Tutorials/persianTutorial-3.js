///// More of functions and variables /////

function myFunction(name, age) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

console.log(myFunction("John", 30)); // "Hello John, you are 30 years old."

//////////////////////////////////////////////////////////////////////////////////////////////

function myFunction2(name2, age2) {
  let message = `Hello ${name2}, you are ${age2} years old.`;
  return message;
}

let message = myFunction2("Ali", 20);
console.log(message); // "Hello Ali, you are 20 years old."

//////////////////////////////////////////////////////////////////////////////////////////////

let number1 = 8;
let number2 = 20;

console.log(number1++);
console.log(number1);

//////////////////////////////////////////////////////////////////////////////////////////////

let num3 = 2;
let num4 = 4;
console.log(num3 < num4); // true
console.log(num3 > num4); // false
console.log(num3 === num4); // false
console.log(num3 !== num4); // true

//////////////////////////////////////////////////////////////////////////////////////////////

// Ternary Operator

let isRegistered = true;
let age2 = 20;

let control = isRegistered === true && age2 >= 18 ? "Allowed" : "Not Allowed";

console.log(control); // Allowed

//////////////////////////////////////////////////////////////////////////////////////////////

let age = 18;
let money = 1100;
let schufa = false;
let anzahlung = 2000;

kredit =
  schufa === false && age >= 18 && (money >= 1500 || anzahlung >= 2000)
    ? "10,000 Euro Allowed"
    : " 10,000 Euro Not Allowed";

console.log(kredit); // 1000 Euro Allowed

//////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [1, 5, -4, 54, 33, 12, -1, 0, 10];
let result;

result = numbers.sort(function (x, y) { // sort() method sorts the array in ascending order
  return x - y;
});

console.log(result); // [-1, -4, 0, 1, 10, 12, 33, 54, 54]

//////////////////////////////////////////////////////////////////////////////////////////////

function com(x, y) {
  if (x - y > 0) {
    return 1;
  } else if (x > y) {
    return -1;
  } else {
    return 0;
  }
}

console.log(com(2, 3)); // -1
console.log(numbers.sort(com)); // [-1, -4, 0, 1, 10, 12, 33, 54, 54]

//////////////////////////////////////////////////////////////////////////////////////////////

ress = numbers.sort((x, y) => x - y); // single line ES6 arrow function
console.log(ress); // [-1, -4, 0, 1, 10, 12, 33, 54, 54]

//////////////////////////////////////////////////////////////////////////////////////////////
let adadHa = [-1, 2, 3, -4, 5, -6, 7, -8, 9, 10];
let res2;

res2 = adadHa.filter((adad) => adad > 0); // filter() method filters the array based on a condition

console.log(res2);

//////////////////////////////////////////////////////////////////////////////////////////////

let adadHa2 = [-1, 2, 3, -4, 5, -6, 7, -8, 9, 10];
let res3;

res3 = adadHa2.filter((adad2) => adad2 < 0); // single line ES6 arrow function
console.log(res3);

console.log("////////////////////");

//////////////////////////////////////////////////////////////////////////////////////////////

res4 = adadHa2.map((numm) => `<li> ${numm} </li>`);
res4 = `<ul>${res4.join("  ")}</ul>`;

console.log(res4);