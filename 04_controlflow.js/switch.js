// switch statement syntax
/* 
switch(key){
    case value_1  : //code
    break;
    case value_n  : //code
    break;
    default : //code
    break;
}
*/

const month = 5

switch (month) {
    case 1: console.log("january");
        break;
    case 2: console.log("febrary");
        break;
    case 3: console.log("march");
        break;
    case 4: console.log("april");
        break;
    case 5: console.log("may");
        break;

    default: console.log("error: month data not receive");
    
        break;
}


//if you want to match string, case-sensitive
const name = "harsh"
switch (name) {
    case "kamal":console.log("my name is Kamal");     
        break;
    case "harsh":console.log("my name is Harsh");     
        break;

    default: console.log("wrong choice");
    
        break;
}