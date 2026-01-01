//singleton// it is a design pattern where only 1 instance,object or class can exist.
//you cant create multiple copies of it, if you try then it will gave the same instance.
//objects literals: when we make objects using literals no singleton is create
const mysmb=Symbol("key1")
const JSuser={
    //key// //value// 
    name: "mayank",  // here system treat key(name) as a string
    [mysmb]: "mykey",
    age: 19,
    "full name": "Mayank Bisht",
    email: "mayank@google.com",
    isLoggedIn: true,
}//JavaScript is a dynamically typed language, so types are decided at runtime, not before.//
// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser.full name);//can't access through dot 
// Dot notation only works with valid identifiers (no spaces, no quotes).
// console.log(JSuser["full name"]);
// console.log(JSuser["mysmb"]);
console.log(typeof JSuser["age"]);
console.log(typeof JSuser["mysmb"]);
console.log(typeof JSuser["isLoggedIn"]);

// Object.freeze(JSuser)//now you cant change values in JSuser//
JSuser.email="mayank@chatgpt.com"
// console.log(JSuser);
JSuser.greeting=function(){
    console.log("hello JS user");
}
console.log(JSuser.greeting());//undefined because here it doesnt have any return type
JSuser.greetingtwo=function(){
    console.log(`hello JS user ${this.name}`);//here this refers to the current object
}
console.log(JSuser.greetingtwo());





