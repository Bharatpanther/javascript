//singleton 
//object.constructor

//object literals
// const jsUser  = { } //called empty object

const jsUser = { name : "hitesh",
                 "full name" : "Harsh Samariya", //"full name" ok dot(.) se access nhi kr skte h 
                 age : 22,
                 location : "jaipur",
                 email : "hitest@gmailc.om",
                 isLoggedIn : false,
                 lastLoggedIn : ["monday", "tuesday"]
}


//in object key consider as string but not written like this "name": "Harsh" x |  name : "harsh" ✓

// 1st method of access object element
// console.log(jsUser.name); // for access objects properties use . operator before key

// 2nd method  
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);


// change email value of object 
//1.  jsUser["age"] = 125 
//2.  jsUser.email = "pawan@gimmin.com"
// console.log(jsUser);



//how to freeze object (means prevent changes in values)
// Object.freeze(jsUser)
// jsUser.email = "pawan@gimmin.com"
// console.log(jsUser); 

jsUser.greeting = function() {
    console.log("hello world good morning");
}
jsUser.greetingTwo = function() {
    console.log(`hello ${this.name} good morning`);
}

// console.log(jsUser.greeting); // outuput : Function (anonymous)]
console.log(jsUser.greeting()); // outuput :hello world good morning
console.log(jsUser.greetingTwo()); // outuput :hello hitesh good morning

