// for loop
/*
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
       
}
*/

/*
//table 
for (let i = 1; i <= 10; i++) {
    // console.log(`${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(i + '*' + j + '=' + i*j );        
    }
    
}
*/


/*
//apply on array
const myArray = ["harsh","karan","vikram","Gammu"]
for (let index = 0; index < myArray.length; index++) {


    const element = myArray[index];
    console.log(element);
    
}
*/


// break and continue
/*
for (let i = 1 ; i <=20 ; i++){
    if(i==5){
    console.log(`condition is detected at ${i}`);
    break;
}
console.log(`value of i is ${i}`);
}
*/


for (let i = 1 ; i <=10 ; i++){
    if(i==5){
    // console.log(`condition is detected at ${i}`);
    continue;
}
console.log(`value of i is ${i}`);
}