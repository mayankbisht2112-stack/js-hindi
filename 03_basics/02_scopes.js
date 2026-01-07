if(true){
let a=10;
const b=20;
var c=30;
}
// console.log(a);//will give error
// console.log(b);//because let and const both are block scopes they are not accessible outside the scope
// console.log(c);//it will give output because its not thats why we dont use var


// NESTED SCOPES//
function one(){
    const username="mayank";
    function two(){
        const website="Github";
        console.log(username);
    }
    // console.log(website);
    

    two()
}
one()
 
// SAME HAPPENS IN IF ELSE //
// if(true){
//     const username="mayank"
//     if(username==="mayank"){
//         const website=" youtube"
//         console.log(username + website)
//     }
    // console.log(website)
// }
// console.log(username)