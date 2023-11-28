///// Objects /////

let person = {
  name: "Hoodad",
  age: 29,
  height: 174
}

///// Access ways /////

// Dot notation
console.log(person.name) // Hoodad

// Brocket notation
console.log(person["name"]) // Hoodad

///// Functions /////

function greet(name, familyName) {
  console.log("Hii " + name + " " + familyName)
}

greet("Hoodad", "Khafas")
greet("Mohsen", "Ashrafzadeh")

function square(number) {
  return number * number
}

console.log(square(2)) // 4
console.log(square(4)) // 16
console.log(square(5)) // 25