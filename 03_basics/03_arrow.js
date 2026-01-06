// const user={
//     username:"mayank",
//     price:900,

//     welcomeMessage(){
//         console.log(`${this.username}, welcome to website`)//basically this points to the current context here our current context is mayank//
//         console.log(this);//it'll tell you the current context//
//     }
// }
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()//now here we change the context sam is our new value(context means value we are talking about)


// function chai(){
//     let username="mayank"//here username is a local variable
//     console.log(this.username)
// }
// chai()//undefined because this looks for a property on OBJECT, not a local variable 

//Arrow function//
// () => {}
    /* const Addtwo= (num1, num2) => {
            console.log(num1+num2)
    }
    Addtwo(4,5) */

    //can also be written like this//
    // const Addtwo= (num1, num2) => (num1+num2)
    const Addtwo=(num1, num2) => ({username: "mayank"}) // for objects //
    console.log(Addtwo(4,5))

    
    