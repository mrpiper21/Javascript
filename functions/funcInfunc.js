// Functions Within Functions
// A powerful feature of JavaScript is you can actually create functions within other functions and even return them!

function createFunction() {
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7
// In this example, createFunction() returns a new function. Then that function can be used as normal.

// Function Hoisting
// JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized.
// You can only do this if you declare functions with the function syntax.

function createFunction() {
    return f;
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
}
const F = createFunction();
console.log(F(3, 4)); // 7
// In this example, the function is returned before it is initialized. 
// Although it is valid syntax, it is sometimes considered bad practice as it can reduce readability.