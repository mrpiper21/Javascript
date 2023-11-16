// Reduce function is for iterating over an array to return a single value or object

const arr = [5, 4, 8, 3, -8, 2]
// sum or max number of an arrow

// tradition method
const findsum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > sum){
            sum = arr[i]
        }
    }return sum
}

// reduce method
const output = arr.reduce(function (acc, cutt) {
    acc = acc + cutt
    return acc;
}, 0)

const OUTPUT = arr.reduce(function(acc, cur) {
    if (cur > acc){
        acc = cur
    }
    return acc

}, 0)
//console.log(OUTPUT)


// EXAMPLE 2
const users = [
    { firstName: "asake", lastName: "madora", age: 40 },
    { firstName: "Micheal", lastName: "osei", age: 17 },
    { firstName: "Samuel", lastName: "Bonsu", age: 17 },
    { firstName: "Mavis", lastName: "Tenkorang", age: 35 }
];

// list of full names
const fullnames = users.map((user) => user.firstName + " " + user.lastName)
//console.log(fullnames)

// list of all firstname whose name are less than 30

const fil = users.filter((x) => x.age < 30).map((x) => x.firstName)
//console.log(fil)


// list of all firstname whose name are less than 30
const red = users.reduce((acc, cur)=> {
    if (cur.age < 30){
        acc.push(cur.firstName)
    }
    return acc;
}, [])
console.log(red)

//const lexx40 = fil.map((x) => x.firstName)

//console.log(lexx40)
