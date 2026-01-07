// function AddTwo(a, b ){
//      console.log(a+b);
// }
// // AddTwo(5,5);
// const result=AddTwo(4,5);
// console.log(result);//undefined//
// function AddTwo(num1, num2){
//     return num1+num2;
// }
// const result=AddTwo(4,5);
// console.log(result)
// function login(username){
//     if(!username){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just LoggedIn`;
// }
// console.log(login("mayank"));
// console.log(login());//undefined
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500))


const user={
    username:"mayank",
    price:900// if we write here prices and in function price it'll show undefined so must check 
};

function Handleobj(anyobj){
    console.log(`username is ${anyobj.username} and the price is ${anyobj.price}`)//carefully check that type is same and in this case price is there in obj or not
}
Handleobj(user);
const myNewArr=[200,300,400]
function getSecondValue(Arr){
    return Arr[1];
}
console.log(getSecondValue(myNewArr));
