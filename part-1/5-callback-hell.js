// Nested Callbacks and Asynchronous Operations
// Establishing the timing of backend production procedures - Callback Step 7
/*
1. Select fruit and place order: 2s - Step completed.
2. Cut the fruit: 2s - Step completed.
3. Add water and ice: 1s - Step completed.
4. Start the machine: 1s - Step completed.
5. Select the container: 2s - Step completed.
6. Select the toppings: 3s - Step completed.
7. Server the ice cream: 2s - This is the current step!
*/

let stocks = {
  Fruit: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

// Minimize the order function expression
let order = (Fruit_name, callProduction) => {
  // input a setTimeout function to...
  setTimeout(() => {
    console.log(`${stocks.Fruit[Fruit_name]} was selected`);
    // Remember! - by moving `callProduction();` inside the setTimeout function it won't start until the food selected has happened. **DON'T MAKE THAT MISTAKE AGAIN OR THE BACKEND PROCEDURE OF THE ICE CREAM STORE WON'T WORK**
    callProduction();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("the machine was started");

          setTimeout(() => {
            console.log(`ice cream was placed on the ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} topping drizzled on top`);

              setTimeout(() => {
                console.log("ice cream was served");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

// input the number from the `Fruits` object indice from the array which corresponds to the customer's selection of the fruit type
order(0, production);

// The strawberries are being selected after 2s
// Production is starting immediately
// The the fruit is being chopped after 2s
// The water and ice are being added after 1s
// The machine is being started after 1s
// The ice cream is placed on the cone after 2s
// The toppings are being selected after 3s
// And the ice cream is being served after 2s
// The system is operating as intended! - or is it?

// This is an illustration of complex web of nested callbacks formally known as CALLBACK-HELL!
// What is the solution to this? Promises or async/await can be used to handle async operations so they're more organized and readable. 
