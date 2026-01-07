// if (true) {
//     // then this code will run //
// }
// if (false) {
//     // then this code will not run //
// }



// //=== it is used when we want to check datatypes also //
// //=== checks both value and datatype//
// if(2=="2"){
//     console.log("executed");
// }
// if(2==="2"){
//     console.log("executed");
// }
// else{
//     console.log("not executed");
// }



// const userwantPhone=true;
// const usermoney=true;
// if(userwantPhone && usermoney){
//     console.log("buying phone");
// }
// const loggedIngoogle=true;
// const loggedInEmail=true;
// if(loggedIngoogle || loggedInEmail){
//     console.log("you can login");
    
// }



// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
 
// const user=[]
// if(user.length===0){
//     console.log("Array is empty");
// }

// const obj={}
// if(Object.keys(obj).length===0){
//     console.log("Object is empty");
    
// }


// //Nullish coalescing operator (??)
// // ?? returns the right-hand value only if the left-hand value is null or undefined.

// const name=null
// let ans=name??"mayank"
// console.log(ans);



//ternary operator//
// condition ? true : false

const age=17
age>=18 ? console.log("you can drive") : console.log("you can't");

