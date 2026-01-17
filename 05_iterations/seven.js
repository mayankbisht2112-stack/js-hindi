const Mynumbers=[1,2,3,4,5,6,7,8,9,10]
const newnums=Mynumbers
                        .map((num)=>num*10)
                        .map((num)=>num+1)//in the 2nd chain num will be the updated one 
                        .filter((num)=>num>40)//this is chaining
console.log(newnums);
                        