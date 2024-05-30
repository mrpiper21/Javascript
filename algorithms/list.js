class list {
    constructor(){
        this.dataStore = [];
        this.listSize = 0;
        this.pos = 0;
        this.length = length
        this.append = append;
        this.find = find;
        this.remove = remove;
        this.toString = toString;
        this.insert = insert;
        this.clear = clear;
        this.contain = contain;
        this.getElement = getElement;
        this.front = front;
        this.currPos = currPos;
        this.next = next;
        this.moveTo = moveTo;
        this.end = end;
        this.prev = prev;
    }
}

function append(element){
    this.dataStore[this.listSize++] = element;
};

function find(element){
    const found = this.dataStore.indexOf(element);

    if (found >= 0) {
        return this.dataStore.indexOf(element);
    };
    return -1;
    // for(var i = 0; i < this.dataStore.length; ++i){
    //     console.log(this.dataStore[i])
    //     if(this.dataStore[i] == element){
    //         return i;
    //     };
    //     return -1;
    // };
};

function remove(element){
    const foundAt = this.find(element)
    // console.log(this.dataStore.length)
    // console.log(foundAt)
    if(foundAt > -1){
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        // console.log(this.dataStore)
        return true;
    };
    return false;
};

function toString(){
    console.log(this.dataStore);
    return this.dataStore;
};

function insert(element, after){
    var inserPos = this.find(after);
    if(inserPos >= 0){
        this.dataStore.splice(inserPos+1, 0, element);
        ++this.listSize;
        return true;
    };
    return false;
};

function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
    console.log('All cleaned up!')
}

function contain(element){
    const found = this.dataStore.indexOf(element)
    if(found >= 0){
        return true;
    };
    return false;
}

function end(){
    this.pos = this.listSize - 1;
}

function currPos(){
    return this.pos;
};

function end(){
    this.pos = this.listSize - 1;
};

function prev(){
    if(this.pos > 0){
        --this.pos;
    };
};

function moveTo(position){
    this.pos = position;
};

function getElement(){
    return this.dataStore[this.pos];
};

const List = new list();
List.append([2, 'Bob']);
List.append(2);
List.append('cat');
// console.log(List.remove(2));

const names = new list();
names.append('Ben');
names.append('peter')
console.log(names.insert('Fiifi', 'Ben'));
names.clear();
names.toString();
// console.log(names.toString())
