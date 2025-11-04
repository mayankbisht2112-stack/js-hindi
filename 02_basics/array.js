//Arrays//
// const myArr=[1,2,3,4,"mayank"]
// console.log(myArr);

// When you copy an array or object in JavaScript, you can do it in two ways:
// Shallow Copy: If the object/array contains nested objects or arrays, those inner references are shared, not copied.
// Deep Copy: A deep copy creates a completely independent copy, including all nested objects or arrays.
// So changing one won’t affect the other.

// ARRAY METHODS //
// const myArr2=[1,2,3,4,5]
// myArr2.push(6)
// console.log(myArr2);
// myArr2.pop()
// console.log(myArr2);

const myArr3=[9,8,7,6,5]
// myArr3.unshift(1)
// console.log(myArr3);
// myArr3.shift();
// console.log(myArr3);
// console.log(myArr3.includes(9));
// console.log(myArr3.indexOf(3));
const newArr = myArr3.join()
// console.log(myArr3);
// console.log( newArr);
// console.log(typeof(newArr));
// slice, splice //
const myArr4=[10,20,30,40,50]
// console.log("A ", myArr4);
const myn1= myArr4.slice(1,3)  // slice: It do not change the original array. It return a new array with selected elements in this example it will return elements from index 1 to 2 (3 is excluded one) //
// console.log(myn1);
console.log("B",myArr4);
const myn2=myArr4.splice(1,3) // splice: It do change the original array.Here splice deletes the elements from index 1 to 3 and the deleted item will go in myn2 
console.log(myn2);// 20,30,40
console.log(myArr4);// the remaining changed array // 10, 50 //


