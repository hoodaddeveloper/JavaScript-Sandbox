///// More about strings /////

let result1;
let result2;
let result3;
let result4;
let result5;
let result6;
let result7;
let result8;
let result9;
let result10;
let result11;
let result12;
let str1 = "Hello my name is Hoodad";
let str2 = "Hello,my,name,is,Hoodad";
let firstName = "John";
let lastName = "Doe";

result1 = "It's a great course";
result2 = "It's a great course";
result3 = `Hello, my first name is ${firstName} and my last name is ${lastName}.`;

result4 = firstName.toLowerCase(); // "john"
result5 = lastName.toUpperCase(); // "DOE"
result6 = firstName.charAt(0); // "J" - first character
result7 = firstName.length; // 4 - length of the string
result8 = firstName.indexOf("o"); // 1 - index of the first occurrence of the character "o"
result9 = str1.split(" "); // ["Hello", "my", "name", "is", "Hoodad"] - split the string by spaces
result10 = str2.split(","); // ["Hello", "my", "name", "is", "Hoodad"] - split the string by commas
result11 = firstName.replace("John", "Jane"); // "Jane" - replace the first occurrence of the string "John" with "Jane"
result12 = str1.includes("Ali"); // false - check if the string includes the substring "Ali"

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);
console.log(result10);
console.log(result11 + " " + lastName);
console.log(result12);

///// More of if...else /////

// Example 1:

let number = 10;

if (number > 10 && number < 20) {
  console.log("The number is between 10 and 20");
} else if (number === 10) {
  console.log("The number is 10");
} else {
  console.log("The number is not between 10 and 20");
}

// Example 2:

let isKind = true;
let isRich = true;

if (isKind && isRich) {
  console.log("You are a kind and rich person");
} else if (isKind) {
  console.log("You are a kind person");
} else if (isRich) {
  console.log("You are a rich person");
} else {
  console.log("You are a simple person");
}

///// Working with try & catch /////

try {
  let result;
  result = 22 - 2;

  console.log(sum);
} catch (error) {
  console.log(error.message);
}

///// Working with Objects /////

let person = {
  name: "Hoodad",
  age: 27,
  height: 1.7,
  isMarried: false,
  hobbies: ["Sports", "Cooking"],
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

///// Scope & Local Variables /////

function myFunction() {
  if (false) {
  let color = "blue";
  console.log(color);
  }
}

myFunction();
