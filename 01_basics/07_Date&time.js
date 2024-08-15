const myDate = new Date() // this is date object. at the end of object brackets () , must.
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// const myCreatedate = new Date(2023, 0, 23, 5, 8)
// const myCreatedate = new Date(2023, 0, 23)
// const myCreatedate = new Date("2024-10-11")
const myCreatedate = new Date("11-10-2001")
// console.log(myCreatedate.toLocaleDateString());
// console.log(myCreatedate.toDateString());
// console.log(myCreatedate.toLocaleString());


const myTimestamp = Date.now()
console.log(myTimestamp); // output in milisecond : 1723718015328
console.log(myCreatedate.getTime()); // output : 1005350400000


// *********** convert into seconds ******************
console.log(Math.floor(myTimestamp/1000)); // 1st method when you store date.now() in variable
console.log(Math.floor(Date.now()/1000));  // 2nd method 

// ******* more methods *********
/*
    getDate() , getMonth(), getDay(), getTime()
*/




