//for each loop
const coding =["js","ruby","python","reactjs"]
/*
coding.forEach( function(val){
    console.log(val);
    
} )
*/



//using arrow function 
/*
coding.forEach( (item) => {
    console.log(item);
} )
*/


/*
function printme(item){
    console.log(item);
    
}
coding.forEach(printme)
*/




coding.forEach((ele, index, arr) => {
    console.log(ele, index, arr);
    
});



const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
    {
        languageName : "pyhton",
        languageFileName : "py"
    }
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})