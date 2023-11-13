// Anonymous Function
// You can optionally exclude the name of the function after the function keyword.

var f = function(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7

// Immediately Invoked Function Expression (IIFE)
// You can create a function and immediately execute it in Javascript.

const result = (function(a, b) {
    const sum = a + b;
    return sum;
})(3, 4);
console.log(result); // 7