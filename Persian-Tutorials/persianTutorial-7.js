///// Date Object /////

const now = new Date(); // create a new date object for the current date and time
const date1 = new Date("Feb 11, 2008, 08:00"); // create a new date object for a specific date
const date2 = new Date(2008, 1, 11, 8, 0); // create a new date object for a specific date and time

console.log(now); // print the current date and time
console.log(date1); // print the date and time for Feb 11, 2008
console.log(date2); // print the date and time for Feb 11, 2008 at 8:00

///// Find Element in an Array /////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create an array of numbers

function findNumber(x) {
  if (numbers.includes(x)) {
    console.log(`The array contains the number ${x}.`);
  } else {
    console.log(`The array does not contain the number ${x}.`);
  }
}

findNumber(33);

/// /// /// /// /// /// /// /// /// ///

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create an array of numbers
nums.forEach((num, i) => console.log(i, num * 10)); // print each number in the array multiplied by 10 with the index

///// join an Array /////

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create an array of numbers

const joined = nums2.join("* "); // join the array into a string separated by a star and a space
console.log(joined);

///// Split a String /////

const msg = "My name is Albert Wesker!"; // create a string
const parts = msg.split(" "); // split the string into an array of words

console.log(parts); // print the array of words

const combined = parts.join(" - "); // join the array of words into a string separated by a hyphen
console.log(combined);

///// sort an array /////

const nums3 = [1, 4, 3, 2, 8, 0, 6, 7, 5, 9]; // create an array of numbers

nums3.sort(); // sort the array in ascending order
console.log(nums3); // print the sorted array

nums3.reverse(); // sort the array in descending order
console.log(nums3); // print the reversed array

/// /// /// /// /// /// /// /// /// ///

const IDs = [
  { id: 1, name: "Albert Wesker" },
  { id: 2, name: "Leon S. Kennedy" },
  { id: 3, name: "Jill Valentine" },
];

IDs.sort(function (a, b) {
  let nameA = a.name.toUpperCase(); // ignore upper and lowercase
  let nameB = b.name.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) return -1;
  if (nameB > nameA) return 1;
  return 0;
});

console.log(IDs);

///// every and some /////

const nums4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer = nums4.every(value => value > 0);
console.log(answer); // false

/// /// /// /// /// /// /// /// /// ///

const nums5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer2 = nums5.every(value => value >= 0);
console.log(answer2); // true

// Continue ...