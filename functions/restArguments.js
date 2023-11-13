// Basic Syntax
// The syntax is:

function f(...args) {
    const sum = args[0] + args[1];
    return sum;
}
console.log(f(3, 4)); // 7
// In this example the variable args is [3, 4].

// Why
// It may not be immediately obvious why you would use this syntax because you can always just pass an array and get the same result.

// The primary use-case is for creating generic factory functions that accept any function as input and return a new 
// version of the function with some specific modification.

// By the way, a function that accepts a function and/or 
// returns a function is called a higher-order function, and they are very 
// common in JavaScript.

// For example, you can create a logged function factory:

function log(inputFunction) {
    return function(...args) {
        console.log("Input", args);
        const result = inputFunction(...args);
        console.log("Output", result);
        return result;
    }
}
const f = log((a, b) => a + b);
f(1, 2); // Logs: Input [1, 2] Output 3