///// FreeCodeCamp Basic Data Structures /////

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = ["Ali"];
// Only change code above this line
console.log(myArray);

/// // ///

function mixedNumbers(arr) {
  // Only change code below this line
  arr.push(7, "VIII", 9);
  arr.unshift("I", 2, "three");
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

/// // ///

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

/// // ///

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);

/// // ///

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

///// Functions as Data /////////////////////////////////////////////////////////

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 10000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

//// Functions as Parameters /////////////////////////////////////////////////////////

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);

  if (checkA === checkB) {
    return func(val);
  } else {
    console.log('inconsistent results');
  }
}

console.log(checkConsistentOutput(addTwo, 12));

// Continue ...