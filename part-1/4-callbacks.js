// Callbacks: Connecting Functions

// We will create two callbacks to form a relationship
// Here are function definitions
function one() {
  console.log("Step 1");
}

function two() {
  console.log("Step 2");
}

// Function calls without callbacks
one();
two();

// Reverse the order of function calls for different output
/*
two();
one();
*/

// Creating a callback relationship
function one(callTwo) {
  console.log("Step 1 complete. Please call Step 2");
  callTwo();
}

function two() {
  console.log("Step 2 complete");
}

// Callback usage
one(two);

// Reverse the order of callback function
/*
function one(callTwo) {
  callTwo();
  console.log("Step 1 complete. Please call Step 2");
}

one(two);
*/

// Explain the difference in behavior:
// Reversing the order of the callback function changes the output sequence.
// When one(two) is called, "Step 2 complete" is logged first, followed by "Step 1 complete. Please call Step 2".
// Next is the analogizing the rest of the Async JS concepts as an ice cream business. Let's go!
