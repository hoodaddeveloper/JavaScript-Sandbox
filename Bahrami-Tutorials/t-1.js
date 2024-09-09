let myName = "Hoodad 'Wesker'"
console.log(myName)

let a = 2
let b = 4
let c = a ** b
console.log(c)

let d = 10
console.log(d++)
console.log(d)

console.log("-----------------")

geld = true
zeit = false

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

let day = 8

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