// Primitive datatypes
// they  are call by value 
// we get copy of data not the original and whatever the changes we make it make changes into the copy and dont affect the orignal data


// 7 primitive datatypes are there: String, boolean, number, null, undefined, symbol, bigInt

//symbol : when you need to create something truly unique, like an ID, key, or property name that should never accidentally clash with others, you can use a Symbol.
// even if they have same description they are unique:
// const id=Symbol("name")
// const id2=Symbol("name")
// console.log(id===id2); //false

// reference datatypes
// Array, objects, functions
const heroes=["ironman", "superman", "batman"]
let myObj = {
    name: "mayank",
    age: 19
}
 const myFunction=function(){
    console.log("hello world");
 }
myFunction()
 




