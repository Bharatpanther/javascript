// reduce 

const  myNum = [1,2,3,4]

/*
const myTotal = myNum.reduce(function (acc,currval ){
    console.log(`acc is ${acc} and currval is ${currval}`);
    return acc + currval
},0)
console.log(myTotal);
*/

/*
// reduce using arrow function
const myTotal = myNum.reduce( (acc, currval) => (acc + currval),5 )
console.log(myTotal);
*/


const Array = [
    {
        course : "javascript",
        price : 299
    },
    {
        course : "Pyhton",
        price : 299
    },
    {
        course : "reatjs",
        price : 299
    },
]

const  arr = Array.reduce( (acc,item) => (acc + item.price),0)
console.log(arr);
