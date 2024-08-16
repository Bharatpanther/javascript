//singleton 
//object.constructor

//object literals
// const jsUser  = { } //called empty object

const jsUser = { name : "hitesh",
                 age : 22,

}


//in object key consider as string but not written like this "name": "Harsh" x |  name : "harsh" ✓

// 1st method of access object element
console.log(jsUser.name); // for access objects properties use . operator before key

// 2nd method (you can access more than one properties in this ) 
console.log(jsUser["name", "age"]);
