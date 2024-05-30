/* create an object that stores individual letters in an array and has 
a function for displaying the letters as a single word */

class letterObj {
    constructor(){
        this.letter = [];
        this.addLetter = addLetter;
        this.displayLetter = displayLetter;
    };
};

function addLetter(letter){
    this.letter.push(letter);
    // console.log(this.letter)
};

function displayLetter(){
    const letter = this.letter.join(' ').toString();
    console.log(letter)
}

const letter = new letterObj()
letter.addLetter(['Ama: Hi, my name is Ama']);
letter.addLetter(['Eva: Hi my name is Eva']);
letter.displayLetter()

