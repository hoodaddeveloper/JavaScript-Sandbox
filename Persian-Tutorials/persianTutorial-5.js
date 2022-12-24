///// Set timeout function to run after 3 seconds /////

console.log(1);
console.log(2);

setTimeout(function () {
  console.log("Some Data"); // This will be printed after 3 seconds
}, 3000); // 3 seconds

console.log(3);
console.log(4);

/////////////////////////////////////////////////////////////////////////

let timeNow = 20; // Set timeNow to 20

if (timeNow >= 5 && timeNow <= 12) {
  // If timeNow is greater than or equal to 5 and less than or equal to 12
  console.log("Good Morning"); // Print "Good Morning"
} else if (timeNow >= 13 && timeNow <= 18) {
  // If timeNow is greater than or equal to 13 and less than or equal to 18
  console.log("Good Afternoon"); // Print "Good Afternoon"
} else {
  console.log("Good Night"); // Print "Good Night"
}

/////////////////////////////////////////////////////////////////////////

let role = "admin"; // Set role to "guest"

switch (role) {
  case "guest": // If role is "guest"
    console.log("Guest User"); // Print "Guest User"
    break;
  case "user": // If role is "user"
    console.log("Registered User"); // Print "Registered User"
    break;
  case "admin": // If role is "admin"
    console.log("Admin User"); // Print "Admin User"
    break;
  default: // If role is not "guest", "user" or "admin"
    // Print "Unknown User"
    console.log("Unknown User"); // Print "Unknown User"
}

/////////////////////////////////////////////////////////////////////////

if (role === "guest") {
  console.log("Guest User");
} else if (role === "user") {
  console.log("Registered User");
} else if (role === "admin") {
  console.log("Admin User");
} else {
  console.log("Unknown User");
}

///// Loops /////

// for loop
for (let i = 0; i <= 5; i++) {
  console.log("Hoodad");
  console.log(i);
}

// while loop
let i = 0;

while (i <= 5) {
  // While i is less than or equal to 5
  console.log(i);
  i++; // Increment i by 1
}

// do while loop
let x = 0;

do {
  console.log(x); // Print 0, 1, 2, 3, 4, 5
  x++;
} while (x <= 5); // While x is less than or equal to 5

// for in loop
const person = {
  name: "John",
  age: 30,
};

const colors = ["red", "green", "blue"];

for (let key in person) {
  console.log(key); // Print "name", "age"
  console.log(person[key]); // Print "John", 30
}

/// /// ///

for (let index in colors) {
  console.log(colors[index]); // Print "red", "green", "blue"
}

// for of loop
const farben = ["Rot", "Grün", "Blau"];

for (let farbe of farben) {
  console.log(farbe);
}

///// Repeat /////

const arr = ["Hoodad", "Ali", "Hossein", "Samad"]

for (let s = 0; s < arr.length; s++) {
  console.log(arr[s]); // Print "Hoodad", "Ali", "Hossein", "Samad"
}

for (s of arr) {
  console.log(s); // Print "Hoodad", "Ali", "Hossein", "Samad"
}

// Continue ...