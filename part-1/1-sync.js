// Synchronous: JS runs serially from top-to-bottom.

// JS runs serially from top to bottom.
// When the code outputs to the console, it reads "I eat ice cream with a spoon."
console.log(" I ");

console.log(" eat ");

console.log(" ice cream ");

console.log(" with a ");

console.log(" spoon ");

// Move the "spoon" string between "eat" and "ice cream."
// Again, JS runs serially from top to bottom.
// When the code outputs to the console, it now reads "I eat spoon ice cream with a."
console.log(" I ");

console.log(" eat ");

console.log(" spoon ");

console.log(" ice cream ");

console.log(" with a ");

// In conclusion, JS is a synchronous, single-threaded language by default.
