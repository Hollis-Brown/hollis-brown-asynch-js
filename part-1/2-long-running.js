// Long-running Synchronous: JS runs without yielding to other tasks
// Remember! - in synchronous JS the code executes serially from top-to-bottom
// Output: "I", "eat", "with a", "spoon"
// After four seconds: "ice cream" is logged to the console, resulting in "I eat with a spoon ice cream"

console.log(" I ");

console.log(" eat ");

setTimeout(() => {
  console.log(" ice cream ");
}, 4000);

console.log(" with a ");

console.log(" spoon ");

/*
The setTimeout function allows running a function after a specific time interval.
In this case, "ice cream" is delayed by four seconds.

Returning to the setTimeout function:
1. The original setTimeout function with arrow syntax is already written.
2. Set the time to 4000 ms (4 seconds) after the comma.
3. Move the "ice cream" string into the setTimeout function argument.
4. Cut and paste the completed setTimeout function.
5. Insert it where "ice cream" previously was, between the "eat" and "with a" strings.

setTimeout(() => {
  console.log("ice cream");
}, 4000);
*/
