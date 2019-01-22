// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function level1(){
  let x = 0;
  function level2(){
    let y = 0;
    x++;
    y++;
    return `[x = ${x}, y = ${y}]`;
  }
  return level2;
};

let X = level1();
console.log(X());
console.log(X());
console.log(X());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  function counterInner(){
    count++;
    return count;
  }
  return counterInner;
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  
  let count = 0;
  return {
    "increment": () => {count++; return count;},
    "decrement": () => {count--; return count}
  };
};

let x = counterFactory();
x.increment();
x.increment();
x.decrement();