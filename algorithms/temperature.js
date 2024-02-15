/* Modify the weeklyTemps object in the chapter so that it stores
a month's worth of data using a two-dimensional array. Create functions
to display the monthly average, a specific week's average, and all the week's averages.
*/

class monthTemps {
    constructor(){
        this.weeklyTemps = [];
        this.average = [];
        this.averageWeelkyTemp = averageWeelkyTemp;
        this.averageMonthlyTemp = averageMonthlyTemp;
        this.add = add;
    }
}

function add(arr){
    this.weeklyTemps.push(arr)
    // console.log(this.weeklyTemps.length)
    console.log(this.weeklyTemps)
};

function averageWeelkyTemp(){
    let total = 0
    let arr = [];   
    let average = 0.0;
    for(let week = 0; week < this.weeklyTemps.length; ++week){
        for(let j = 0; j < this.weeklyTemps[week].length; j++) {
            total += this.weeklyTemps[week][j];
        };
        average = total / this.weeklyTemps[week].length
        arr.push(average)
        // console.log(arr)
        console.log(`week ${week}: ${average}`)
        total = 0;
        average = 0.0;
    };
    this.average = arr;
};

function averageMonthlyTemp(){
    const av = this.average.reduce((acc, cur) => {
        acc = acc + cur
        return acc
    }, 0);

    return `month ${av / this.average.length}`
}

const newMonth = new monthTemps();
newMonth.add([23, 54, 32, 33, 37]);
newMonth.add([34, 35, 32, 37]);
newMonth.add([29, 28, 34, 29, 37, 35]);
newMonth.averageWeelkyTemp();
console.log(newMonth.averageMonthlyTemp());
// newMonth.averageMonthlyTemp();

