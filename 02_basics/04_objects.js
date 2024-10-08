// const tinderuser =  new object()  // singleton  onject because it's creat using constructor

const Tinderuser =  {}
Tinderuser.id = 1452
Tinderuser.name = "harshvardhan"
Tinderuser.age = 22
Tinderuser.email = "harsh@gmail.com"
// console.log(Tinderuser);
// console.log(JSON.stringify(Tinderuser)); // convert object into string

const regularuser = {
    email : "vikram@gmailc.com",
    fullname : {
        userfullname : {
            firstname : "harshvardhan",
            lastname : "Hanuman ji"
        }
    }
}

// console.log(regularuser.fullname.userfullname);



// ***************** merge objects *******************
const obj1 = { 1 : "a", 2 : "b" }
const obj2 = { 3 : "c", 4 : "d" }
const obj4 = { 5 : "c", 6 : "d" }


//1. using assing methods
const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3)

//2. using assing methods
const obj5  = {...obj1,...obj2,...obj4}
// console.log(obj5);

// when data come form database, it is in the form of arary of object
const user = [
    {
        id : "123",
        name : "Harsh"
    },
    {
        id : "124",
        name : "Harshit"
    },
]

// const k = user[0].name
// console.log(k);



//***********accesss specifies array from multiple arrays ****************
// console.log(Object.keys(Tinderuser));
// console.log(Object.values(Tinderuser));
// console.log(Object.entries(Tinderuser));
// console.log(Tinderuser.hasOwnProperty('name'));


// object de-structureing 
const course = {
    coursename : "javascript",
    price : 1245,
    courseinstructure : "harshvardhan"
}

// k = course["courseinstructure"]

// important menhod
// const {courseinstructure} = course  
const {courseinstructure: instructor} = course // here change the name of key now name is instructor
console.log(instructor);
