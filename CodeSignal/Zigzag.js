function solution(numbers) {
    const myArr = numbers
    let arr = [];
    for (let i = 0; i < myArr.length-2; i++){
        arr
        if(myArr[i] < myArr[i + 1] && myArr[i + 1] > myArr[i + 2] || myArr[i] > myArr[i + 1] && myArr[i + 1] < myArr[i + 2]){
            arr.push(0);
        } else {
            arr.push(1);
        }
    } 
    return arr;
}

const arr = solution([1, 2, 1, 3, 4])
 console.log(arr)