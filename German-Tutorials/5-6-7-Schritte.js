// Booleans

let a = "Hello" === "Hello"
console.log(a) // true

let b = "Hello" === "Hallo"
console.log(b) // false

let zahl1 = 5
let zahl2 = 3

if (zahl1 <= zahl2) {
  console.log("z1 ist kleiner als z2")
}

/// /// /// /// /// ///

students = 10

if (students < 10) {
  console.log("weniger als 10")
} else if (students = 10) {
  console.log("gleich 10")
} else {
  console.log("mehr als 10")
}

////// Funktionen //////

function sayHello(name, familienName) {
  console.log("Hello " + name + " " + familienName + "!")
}


sayHello("Ali", "Hosseini") // Hello Ali Hosseini!
sayHello("Erika", "Anderson") // Hello Erika Anderson!