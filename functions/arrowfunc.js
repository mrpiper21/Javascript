// Arrow Syntax
// The other common way to declare functions is with arrow syntax. In fact, on many projects, 
// it is the preferred syntax.

// Basic Syntax
const f = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(f(3, 4)); // 7
// In this example, f is the name of the function. (a, b) are the arguments. 
// You can write any logic in the body and finally return a result. You are allowed to return nothing,
//  and it will instead implicitly return undefined.

// Omit Return
// If you can write the code in a single line, you can omit the return keyword. 
// This can result in very short code.

const F = (a, b) => a + b;
console.log(F(3, 4)); // 7
// Differences
// There are 3 major differences between arrow syntax and function syntax.

// More minimalistic syntax. This is especially true for anonymous functions and single-line functions. 
// For this reason, this way is generally preferred when passing short anonymous functions to other functions.
// No automatic hoisting. You are only allowed to use the function after it was declared. 
// This is generally considered a good thing for readability.
// Can't be bound to this, super, and arguments or be used as a constructor. 
// These are all complex topics in themselves but the basic takeaway should be that arrow functions are simpler in their feature set. You can read more about these differences here.
// The choice of arrow syntax versus function syntax is primarily down to preference and your project's
//  stylistic standards.