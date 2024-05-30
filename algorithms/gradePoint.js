/* Create a grades object that stores a set of student grades in
an object. Provide a function for addding a grade and a function for 
displaying the student's grade average */

class stuGrades {
    constructor() {
        this.results = {};
        this.add = add;
        this.average = average;
    }
}

function add(point){
    if(point.Eng){
        this.results.Eng = point.Eng;
        console.log(`Eng: ${point.Eng}`)
    } else if(point.math){
        this.results.math = point.math
        console.log(`Math: ${point.math}`)
    } else if(point.Chem){
        this.results.Chem = point.Chem
        console.log(`Chem: ${point.Chem}`)
    } else console.log('invalid synthax')
}

function average(){
    if(this.results.Chem && this.results.math && this.results.Eng){
        const ls = this.results.Chem + this.results.math + this.results.Eng;
        return Math.floor(ls / 3);
    } else return 'incomplete results';
};

const susan = {
    math: 67,
    Eng: 69,
    chem: 88
}

const piper = new stuGrades();
piper.add({ Chem: 78});
piper.add({ math: 89 });
piper.add({ Eng: 99 });
console.log('Average score: ' + piper.average())
// console.log(this.results)