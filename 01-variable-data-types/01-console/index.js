/* Use conole */

//The most use console function if log  console.log()

console.log(100)

console.log("Hello World");


//Print Multiple Values
console.log(100, "Hello World", true);

let name = "Alejandro"

console.log(name);

// Console Error
console.error("Error")


// Warning
console.warn("Warning")

//Console Table
console.table({name:"Alejandro", email:"ald.26marzo"})

//Console Group
console.group()
console.log(100)
console.table({wife:"Natalia", me:"Alejandro"})
console.groupEnd()

//Normally you use console.log

// Add styles to logs
const styles = 'padding:10px;background-color:white;color:green'
console.log('%cHello World', styles);