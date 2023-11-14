// filter functions are used to filter an array
// Applying a function to each value in an array
const arr = [ 1, 3, -5, 6]
// filter odd values
const isOdd = (x) =>{
    return x % 2
}
const output = arr.filter(isOdd)
console.log(output)

const arrFunc = arr.filter((x) => x % 2)
console.log(arrFunc)

// filter even numbers
const isEven = (x)=>{
    return x % 2 == 0
}

const evenNums = arr.filter(isEven)
console.log(evenNums)

const arrFuncEven = arr.filter((x) => x % 2 == 0)
console.log(arrFuncEven)