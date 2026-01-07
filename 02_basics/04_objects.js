const regularuser={
    fullname: {
        useerfullname: {
            firstname: "mayank",      //nested objects//
            lastname: "bisht"
        }
    }
}
// console.log(regularuser.fullname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
console.log(obj1);
//Object.assign(target, ...sourceObjects);//
//so thats why we write {} here as target and obj1,2 as source
const obj4={...obj1,...obj2}
// console.log(obj3);
// console.log(obj4);
// console.log(obj1);
// console.log(obj2);
// console.log(tinderUser);
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// destructuring objects//
const course={
    coursename:"JS",
    price:999,
    courseInstructor:"hitesh"
};
const {courseInstructor:Instructor}=course;
console.log(course.courseInstructor);
console.log(Instructor);

//JSON SYNTAX//
// IN OBJECTS
// {
//     "name": "mayank",
//     "course":"JS",
//     "price":0
// }
//IN ARRAY
// [
//     {},
//     {},
//     {}
// ]