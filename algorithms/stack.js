class stack  {
    constructor(){
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.length = length;
        this.clear = clear;

    };
};

function push(element){
    this.dataStore[this.top++] = element;
};

function pop(){
    return this.dataStore[--this.top];
};

function peek(){
    return this.dataStore[this.top - 1];
};

function length(){
    return this.top;
};

function clear(){
    this.top = 0;
    console.log('All cleaned!')
}

var b = new stack();
b.push('Halloween');
b.push('Las Vegas');
b.push('Mango');
console.log(b.peek());
console.log(b.length());
console.log(b.pop());
b.clear()
console.log(b.length());

// converting to number base
function mulBase(num, base) {
    var s = new stack();
    do{
        s.push(num % base);
        num = Math.floor(num /= base);
    } while(num > 0);
    var converted = '';
    while (s.length() > 0){
        converted += s.pop();
    };
    return converted;
};

var num = 32;
var base = 2;
var newNum = mulBase(num, base)
console.log(newNum);

// Palindrome
function isPalindrome(word){
    var h = new stack();
    for(var i = 0; i < word.length; ++i){
        h.push(word[i]);
    };
    var rword = '';
    while(h.length() > 0){
        rword += h.pop();
    };
    if(word == rword) return true;
    return false;
};
console.log(isPalindrome('mim'));