var Value: string = Math.random() < 0.5 ? 'a' : 'b';
console.log(Value);

// class Person {
//     Number: NumberConstructor;
//     constructor(){
//         this.Number = Number;
//     }
// };

type Engine = {
    model: string;
    volt: string;
    YOM?: string;
}

type Id = string | number
let Em: Id = 43830;

// let Car: Engine = {
//     model: 'sdkj;a',
//     volt: 'v34'
// };

interface Point {
    readonly x: number;
    readonly y: number;
}


// Using interface
interface Animal {
    name: string
};

interface Bear extends Animal {
    honey: boolean
};

// Using type

type Human = {
    Head: string;
    mouth: string;
}

type Eva = Human & {
    name: string;
}

interface Options {
    width: number;
}
function Configure(x: Options | "auto") {
    console.log(x);
}
Configure({ width: 100 });
Configure("auto");
// configure("automatic");

function printAll(strs: string | string[] | null){
    if(strs && typeof strs === 'object'){
        for(const s of strs){
            console.log(s);
        };
    } else if( typeof strs === 'string'){
        console.log(strs)
    };
}

printAll(['sd', 'sdf']);

interface Container {
    value: number | null | undefined;
};

function multiplyValue(container: Container){
    if (container.value != null){
        console.log(container.value);

        container.value *= 2;
    };
};

/* The in operator narrowing
JavaScript has an operator for determining if an object has a property with a name: the in
operator. TypeScript takes this into account as a way to narrow down potential types.
For example, with the code: "value" in x . where "value" is a string literal and x is a union
type. The "true" branch narrows x 's types which have either an optional or required property
value , and the "false" branch narrows to types which have an optional or missing property
value . */

type Fish = { swim: () => void};
type Bird = { fly: () => void };
type Alien = { fly?: () => void; swim?: () => void}
function move(animal: Fish | Bird | Alien) {
    if ('swim' in animal) {
        animal;
    } else {
        animal;
    };
};

// instanceof narrowing
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    };
};

// Discriminatin Union

interface circle {
    kind: 'circle';
    radius: number;
};

interface square {
    kind: 'square';
    sideLength: number;
}

type Shape = circle | square;

function handleShape(shape: Shape) {
    if (shape.kind === 'circle') {
        Math.PI * shape.radius ** 2; // by using '!' we assume radius is definitely present
    } else {
        shape.sideLength ** 4;
    }
}

function multiplication(x: number, y: number): number {
    const num: number = x * y;
    console.log(num)
    return num;
}

const f = multiplication(4,5)

function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}