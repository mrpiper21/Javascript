/* Write a function that inserts an element into a list only if the element
to be inserted is larger than any of the elements currently in the list.
Larger can mean either greater than when working with numeric values, or further
down in the alphabet, when woking with textual values. */

class List {
    constructor() {
        this.list = [];
        this.insert = insert;
        this.listSize = 0;
    };
};

function insert(element){
    if (this.list.length == 0){
        this.list.push(element)
        console.log(`success ${this.list}`);
        return 0;
    } else {
        if(this.list.length == 0 || Math.max(...this.list)){
            this.list.push(element);
            console.log(`success: ${element} inserted. List is now ${this.list}`)
        } else {
            console.log(`Failed: ${element} is not larger than any elements in the list`)
        };
    };
};

const myList = new List();
myList.insert(4);
myList.insert(5);
myList.insert(3);
myList.insert(2);
