class stact {
    constructor(){
        this.dataStore = [];
        this.top = 0;
        this.length = lenght;
        this.push = push;
        this.pop = pop;
    }
}

function lenght(){
    return this.top;
};
function push(element){
    this.dataStore[this.top++] = element;
};
function pop(){
    return this.dataStore[--this.top];
};

function factorial(n){
    if(n === 0){
        return 1;
    } else {
        // console.log(factorial(n - 1));
        return n * factorial(n - 1);
    };
};

// Stack implementation of recursion using factorial
function fact(n){
    var s = new stact();
    while(n > 1){
        s.push(n--);
    };
    var product = 1;
    while(s.length() > 0){
        product *= s.pop();
    };
    return product;
};

console.log(factorial(5));
console.log(fact(5));