interface Obj {
    name: string,
    school: string,
    age: number
}

const newObj: Obj = {
    name: 'Bernard',
    school: 'Logos',
    age: 4
};

const w: Obj = {
    name: 'dkf',
    school: 'paradise',
    age: 33
}

const o = { ...newObj, ...w}
console.log(o)