// Map functions are used to transform an array
const arr = [2, 4, 6, 3, 6]

const double = (x)=> {
    return x * 2
}

// converting to binary
const binary = (x) => {
    return x.toString(2)
}
const output = arr.map(binary)
console.log(output)

const sum = arr.map((y) => y + y)
console.log(sum)