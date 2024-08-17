
/*
const username = {
    name : "harshvardhan",
    age : 22,

    message : function (){
        // console.log(`${username} ,welcome to website`) is not working
         console.log(`${this.name}, welcome to website`);
        //  console.log(this);  //gives full detail of current context
         
    }
}

// username.message()
// username.name = "hitesh"
// username.message()

console.log(this); // ootput is empty arrar {}, when on browser output will window object 

*/

/*
function cahi() {
    let usrname = "hitesh"
    console.log(this.hitest); // output : undefined bcoz you not use this in function use only in obj

}
cahi()
*/

/*
const chai = function() {
    let usrname = "hitesh"
    console.log(this.hitest); // output : undefined bcoz you not use this in function use only in obj

}
cahi()

*/

/*
//****************** Arrow function ****************

const chai = () => {
    let usrname = "hitesh"
    console.log(this.hitest); // undefined
    console.log(this); // {}
    
}
chai()
*/


const addtwo1 = (num1, num2) => {
    return num1 + num2
}

console.log(addtwo1(5,9))

//implicit arrow function
const addtwo2 = (num1, num2) => num1 + num2

console.log(addtwo2(5,9))

// use object in arraw function 
const AddTwo = () => ({username : "Hanuman ji"})
console.log(AddTwo().username);

const Arr = () => ([100,200,300])
console.log(Arr()[1]);

