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
// console.log(newNum);

//when u use {} in arraow function you must sue return keyword
const myValNum = myNum.filter( (num) => {
    return num > 6
})

// console.log(myValNum);


/*
//filter using forEach
const numNumber = []
myNum.forEach((num) => {
    if(num >7){
        numNumber.push(num)       
    }
});

console.log(numNumber);
*/


const books = [
    {title:"books one",genre: "fiction", publish: 1981,edition : 2004},
    {title:"books two",genre: "history", publish: 1982,edition : 2010},
    {title:"books three",genre: "chimestry", publish: 1980,edition : 2005},
    {title:"books four",genre: "social science", publish: 1985,edition : 2004},
    {title:"books five",genre: "science", publish: 1982,edition : 2004},
    {title:"books six",genre: "history", publish: 1983,edition : 2000},
]

const userBooks = books.filter( (bk) => bk.genre === 'history')
// console.log(userBooks);

const useee = books.filter ( (book) => {
    return book.edition == 2004
} )
// console.log(useee);


const publish  = books.filter( (bks) => bks.publish > 1982)
console.log(publish);

const pub  = books.filter( (bks) => {
    return bks.publish > 1982 && bks.genre === 'history'
})


