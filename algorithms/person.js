/* Create a person class that stores a person's name and their gender.
Create a list for at least 10 person objects. write a function that displays
all the people in the list of the same gender */

class List {
    constructor(){
        this.myList = [];
        this.listSize = 0;
        this.person = person;
        this.append = append;
        this.displayCat = displayCat;
    };
};

function person(name, gender){
    this.name = name;
    this.gender = gender;
    const ob = {
        name: this.name,
        gender: this.gender,
    };
    return ob;
};
function append(name, gender){
   const ob = this.person(name, gender)
    this.myList.push(ob);
    ++this.listSize;
};

function displayCat(gender){
    const cat = this.myList.filter((el) => el.gender == gender);
    console.log(cat);
};

const newPerson = new List();
newPerson.append('Ruby', 'female');
newPerson.append('Newman', 'male');
newPerson.append('Naah', 'male');
newPerson.append('Faustina', 'female');
newPerson.append('nancy', 'female');
newPerson.append('John', 'male');
newPerson.append('Jane', 'female');
newPerson.append('Mike', 'male');
newPerson.append('Halim', 'male');
newPerson.append('hannah', 'female');
newPerson.displayCat('male')
// const newList = new List();
// newList.displayCat();