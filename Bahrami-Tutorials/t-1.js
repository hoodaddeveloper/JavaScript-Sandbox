let myName = "Hoodad 'Wesker'";
console.log(myName)

let a = 2;
let b = 4;
let c = a ** b;
console.log(c)

let d = 10;
console.log(d++)
console.log(d)

console.log("-----------------")

geld = true;
zeit = false;

if (geld && zeit) {
  console.log("Wir gehen zur Urlaub.")
} else {
  console.log("Wir gehen nicht zur Urlaub.")
}

console.log("-----------------")

if (geld || zeit) {
  console.log("Wir gehen zur Urlaub.")
} else {
  console.log("Wir gehen nicht zur Urlaub.")
}

console.log("-----------------")

/* Switch Case */

let day = 8;

switch (day) {
  case 1:
    console.log("Montag")
    break;
  case 2:
    console.log("Dienstag")
    break;
  case 3:
    console.log("Mittwoch")
    break;
  case 4:
    console.log("Donnerstag")
    break;
  case 5:
    console.log("Freitag")
    break;
  case 6:
    console.log("Samstag")
    break;
  case 7:
    console.log("Sonntag")
    break;
  default:
    console.log("Fehler!")
    break;
}

console.log("-----------------")

/* Loops in JavaScript */

let i = 1;

while (i <= 10) {
  console.log(`${i}.Hoodad1`)
  i++;
}

console.log("-----------------")

let m = 1;

do {
  console.log(`${m}.Hoodad2`)
  m++;
} while (m <= 10);

console.log("-----------------")

for (let x = 1; x <= 10; x++) {
  console.log(`${x}.Hoodad3`)
}

console.log("-----------------")
console.log("-----------------")
console.log("-----------------")

let e = 20;

while (e >= 1) {
  console.log(`${e}.while`)
  e--;
}

console.log("-----------------")

let r = 20;

do {
  console.log(`${r}.doWhile`)
  r--;
} while (r >= 1);

console.log("-----------------")

for (let t = 20; t >= 1; t--) {
  console.log(`${t}.for`);
}

console.log("-----------------")

if (1 < 2) {
  console.log("Yes!");
} else {
  console.log("No!");
}

console.log("-----------------")

for (let j = 0; j <= 10; j++) {
  console.log(`${j}.forJ`);

  if (j == 5) {
    break;
  }
}

console.log("-----------------")

for (let ö = 1; ö <= 2; ö++) {
  console.log("Outer" + ö);

  for (let ä = 1; ä <= 3; ä++) {
    console.log("Inner" + ä);
  }
}

console.log("-----------------")

let star = '';

for (let k = 1; k <= 5; k++) {
  for (let g = 1; g <= k; g++) {
    star += '*';
  }
  star += '\n';
}

console.log(star)

console.log("-----------------")

let str = '';

for (let v = 1; v <= 5; v++) {
  for (let c = 5; c >= v; c--) {
    str += '*';
  }
  str += '\n';
}

console.log(str)

console.log("-----------------")