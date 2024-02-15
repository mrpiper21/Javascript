let plainText = 'Hello World';

const key = 3;
const uppeCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// console.log(uppeCase.indexOf(plainText))
const cypher = (text) => {
    let cyperText = [];
    for(var i = 0; i < text.length; i++){
        if (uppeCase.indexOf(text[i]) >= 0 ){
            const num = uppeCase.indexOf(text[i]);
            const limiter = (num + key) % 26;
            cyperText.push(uppeCase[limiter]);
        } else if (lowerCase.indexOf(text[i]) >= 0){
            const nem = lowerCase.indexOf(text[i]);
            const limiter = (nem + key) % 26;
            cyperText.push(lowerCase[limiter]);
        } else {
            cyperText.push(text[i]);
        }
    };
    return cyperText.join('');
};

console.log(cypher(plainText))