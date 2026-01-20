// const coding=["JS","RUBY","C++","JAVA"]
// const value=coding.forEach( (item)=> {
//     // console.log(item);
//     return item; // foreach loop doesn't return value//
// } )
// console.log(value);// will give undefined//


// const MyNums=[1,2,3,4,5,6,7,8,9]
// const value=MyNums.filter( (nums)=>{
//     return nums>5 // here you declared blockscope so you NEEEEED to return remember
// } )

//if you dont want to use filter and do it with foreach so://
// const newnums=[]
// MyNums.forEach((nums) => {
//     if(nums>4){
//         newnums.push(nums)
//     }
// })
// console.log(newnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const MyChoice=books.filter( (bk)=>bk.genre==='History' )
  // const MyChoice=books.filter((bk)=>{
  //   return bk.publish>1980 && bk.edition>2007
  // })
  console.log(MyChoice);
  