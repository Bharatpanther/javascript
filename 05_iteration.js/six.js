const coding =["js","ruby","python","reactjs"]
/*
const value = coding.forEach( (item) => {
    console.log(item);
    return item;
})

console.log(value); //it's returns value undefined, foreach loop not return any value 
*/

const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum  = myNum.filter( (num) => num >4)
console.log(newNum);

//when u use {} in arraow function you must sue return keyword
const myValNum = myNum.filter( (num) => {
    return num > 6
})

console.log(myValNum);

