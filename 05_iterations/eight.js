// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,);// here initial value will be stored in accumulator //
  //bas yehi kam h initial value ka uske baad current value + accumulator accumulator m jaygi//

// const nums=[1,2,3]
// const total=nums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc+currval
// },0)
// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalprice=shoppingCart.reduce((acc,item)=>{
  console.log(`${acc},${item.price}`);
  
  return acc+item.price
},0)
console.log(totalprice);
