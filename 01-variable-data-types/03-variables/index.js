// Ways to declare a variable
//var, let, const

let firstName = "Alejandro";
let lastName = "Diaz";

/*
console.log(firstName, lastName, age);

let age = 25

Uncaught ReferenceError: Cannot access 'age' before initialization

*/

//With var we don't have that error -- age return a undefined but not error

console.log(firstName, lastName, age);

var age = 25;

//Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// Can't start with a number

// Multi-Word Formatting
// firstName = CamelCase
//first_name = underscore
//FirstName = PascalCase
// firstname = lowercase

//Re-assigning Variables

age = 26;
console.log(age);

let score;
console.log(score);

score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

//x = 2; // Uncaught TypeError: Assignment to constant variable.


// const score1; // Missing initializer in const declaration