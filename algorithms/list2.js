class List {
    constructor(){
        this.dataStore = [];
        this.listSize = 0;
        this.pos = 0;
        this.append = append;
        // this.find = find;
        this.remove = remove;
        this.toString = toString;
        // this.insert = insert;
        // this.clear = clear;
        this.contain = contain;
        // this.getElement = getElement;
        // this.front = front;
        // this.currPos = currPos;
        // this.next = next;
        // this.moveTo = moveTo;
        // this.end = end;
        // this.prev = prev;
    }
}

function contain(element){
    const foundAt = this.dataStore.indexOf(element)
    if(foundAt >= 0){
        console.log(this.dataStore[foundAt]);
        return true;
    };
    return false;
};

function append(element){
    this.dataStore[this.listSize++] = element;
};

function toString(){
    return this.dataStore;
};

function remove(element){
    const foundAt = this.dataStore.indexOf(element);
    if(foundAt >= 0){
        this.dataStore.splice(foundAt, 1)
        --this.listSize;
        console.log('success');
        return true;
    }
    console.log('failed');
    return false;
};

function Customer(name, movie){
    this.name = name;
    this.movie = movie;
};

function checkOutMovie(name, movie, filmList, customerList){
    // console.log(filmList.toString())
    if(filmList.contain(movie)){
        let c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
        console.log('checked Out!');
    } else {
        console.log(`${movie} not found`);
    };
    
};
const inventory = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II',
    'Pulp Fiction',
    'The Good, the Bad and the Ugly',
    '12 Angry Men',
    'Schindler"s List',
    'The Dark Knight',
    'The Lord of the Rings: The Return of the King',
    'Fight Club',
    'Star Wars: Episode V - The Empire Strikes Back',
    'One Flew Over the Cuckoo"s Nest',
    'The Lord of the Rings: The Fellowship of the Ring',
    'Inception',
    'Goodfellas',
    'Star Wars',
    'Seven Samurai',
    'The Matrix',
    'Forrest Gump',
    'City of God',
];

let movieList = new List();
let customers = new List();
for (var i = 0; i < inventory.length; ++i){
    movieList.append(inventory[i]);
};

checkOutMovie('susan', 'City of God', movieList, customers)
