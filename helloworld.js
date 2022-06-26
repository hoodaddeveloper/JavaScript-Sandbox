/* 
    This is a practice to understand
    JavaScript basics
*/

// Declaring Variables

const firstName = 'Hoodad'; // String
let lastName = 'Wesker';
let nickName = 'TheWesker';
let age = 27; // Number
let isSleeping = false // Boolean
const skills = ['Valorant', 'Overwatch', 'Developer']; // Array
let generalInfo = {
    weight: 55,
    height: 177,
    hairColor: 'Black',
    isAlive: true
} // Object

// Reassign the variable
nickName = 'TheWesker'; // String

// Print Output
console.log('First Name : ' + firstName); // First Name : Hoodad
console.log('Last Name : ' + lastName); // Last Name : Wesker
console.log('NickName : ' + nickName); // NickName : hoodaddeveloper
console.log('Age : ' + age); // Age : 27
console.log('Sleeping : ' + isSleeping); // Sleeping : false
console.log('Skills : ' + skills); // Skills : Valorant, Overwatch, Developer
console.log('General Info : ' + generalInfo); // General Info : [object Object]
console.log('Weight : ' + generalInfo.weight); // Weight : 55
