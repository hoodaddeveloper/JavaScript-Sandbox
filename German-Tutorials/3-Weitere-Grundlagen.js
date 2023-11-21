// Use Strict

let greeting = "--- Hallo Hoodad! ---"

// Die Anzahl der zeichen in einem String
console.log(greeting.length) // 21

// Ein einzelnes Zeichen abfragen
console.log(greeting[4]) // H
console.log(greeting.charAt(4)) // H

// Wo findet sich ein Zeichen in einem String
console.log(greeting.indexOf("!")) // 16
console.log(greeting.indexOf("-", 10)) // 18

// Großbuchstaben bzw. Kleinbuchstaben
console.log(greeting.toUpperCase()) // --- HALLO HOODAD! ---
console.log(greeting.toLowerCase()) // --- hallo hoodad! ---

// Text ersetzen
console.log(greeting.replace("Hoodad", "Khafas")) // --- Hallo Khafas! ---

// Zeichen rechts und links vom String entfernen
console.log(greeting.trim()) // Entfernt die Leerzeichen links und rechts

// New line
console.log("Hello\nHoodad")

// String wiederholen
console.log("Hoodad ".repeat(5)) // Hoodad Hoodad Hoodad Hoodad Hoodad 