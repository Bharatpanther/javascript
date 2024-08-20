const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const myNums = myNumbers.map( (num) => {return num +10})
console.log(myNums);

const myNum = myNumbers.map( (num) => num + "a")
// console.log(myNum);




//Chaining
const myNumb = myNumbers.map( (num) => num * 10).map( (num) => num +2).filter( (num) => num >55)
console.log(myNumb);
