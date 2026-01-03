let email = "mayank@gmail.com"
let accountcity = "delhi"
let accountstate;
// In let we can reassign values but const does allow to reassign //
// In const you must initialize at the time of declaration //
// let length; OK
// const breadth; NOT OK
// Even though we cant reassign the const but we can change the inner values if they are objects and array //
const password = 12121
// var email // we do not use var because of scope issue it is a function scope: // it is an old javascript issue//
/*
if(true){
var name="mayank"
}
console.log(name) */
// even if we declare name inside the for loop it still accessable outside loop 
// password=434343;
email = "hjhjhj@gmail.com";
console.log(accountstate);
console.log(email);
console.table([email, accountcity, accountstate, password])
