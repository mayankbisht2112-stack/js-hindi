const user={
    username:"mayank",
    price:900,

    welcomeMessage(){
        console.log(`${this.username}, welcome to website`)//basically this points to the current context here our current context is mayank//
        console.log(this);//it'll tell you the current context//
        
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()//now here we change the context sam is our new value(context means value we are talking about)