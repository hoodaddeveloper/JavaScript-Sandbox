// Abschnitt 2: Erste Schritte
console.log("Hallo JavaScript")

let bergüßung = "Guten Morgen"
console.log(bergüßung)

// String
let stringZahl = "50"
console.log(typeof stringZahl) // Shows the type of the variable too
console.log(stringZahl)

// Zahlen
let zahl = 100
console.log(typeof zahl)
console.log(zahl)

// Booleans
let positiv = true
let negativ = false
console.log(typeof positiv)
console.log(positiv)

// Use Strict
console.log(5 + 5) // 10
console.log("5" + "5") // 55

// Wasser
let mineralWasser = 2
let plusPland = 0.25 + mineralWasser
console.log(plusPland)

///// Aufgaben /////

// Tag im Monat
let dayOfMonth = (new Date()).getDate()
console.log("Heute ist" + " " + dayOfMonth)

// Der Name aktuellen Monats
let monthName = (new Date()).toLocaleDateString(["de", "en"], {month: "long"})
console.log(monthName)

// Das aktuelle Jahr (Schreibweise 1)
let year1 = (new Date()).getFullYear()
console.log(year1)

// Das aktuelle Jahr (Schreibweise 2)
let year2 = (new Date()).toLocaleDateString(["de", "en"], {year: "numeric"})
console.log(year2)

console.log("---- Plus 5 ----")

console.log(year1 + 5)
console.log(year2 + 5)

console.log("---- Warum? ----")

console.log(typeof year1)
console.log(typeof year2)