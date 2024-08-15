const name = "harsh "
const repoCount = 52

// console.log(name + repoCount + "value");
// this kind of syntex use in old time 

console.log(`my name is ${name.toUpperCase()}and my total reposetory on github is ${repoCount}`);
//this is modern syntex of console.log using backtic

// string declaration 
const newName = new String('harsh')
console.log(newName);

//learn string methods like concate. toUpperCase, toLowercase, length, etc.
console.log(newName[0]);
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(2)); //access by position(index no.)

const newString = newName;
console.log(newString.substring(0,4)); //gives the string element of 0 to 3 index no. 

const anotherName = newName
console.log(anotherName.slice(0,-2));
console.log(anotherName.slice(0,2));
console.log(anotherName.slice(-3,4));

const myName = "   harsh   "
console.log(myName);
console.log(myName.trim());   //it's remove the extra space before and after


const url = "https://harshyahho%20vishal.com"
console.log(url.replace('%20', '-'));


const mName = "harsh-var-com"
console.log(mName.split('r')); //split where r presenting in string
