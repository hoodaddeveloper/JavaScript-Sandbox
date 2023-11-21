///// Arrays /////

let students = ["Alex", "Hoodad", "Jack"]

console.log(typeof students)
console.log(students.length)

console.log("[0]", students[0])
console.log("[1]", students[1])
console.log("[2]", students[2])

// Add a element to the end
students.push("Ali")
console.log(students)

// Remove an element from the end
students.pop()
console.log(students)

// Overwrite an element
students[0] = "Michael"
console.log(students)