const buttons=document.querySelectorAll('.button') // we are storing all html collection in buttons 
// what does button contains: nodelist(4) [span.button, span.button, span.button, span.button]
const body=document.querySelector('body')
buttons.forEach(function(b){
  //here on b a click event is used where when you click the button the function will be applied to it  
    b.addEventListener('click',function(e){
// e is an event object here contains details about click 
        if(e.target.id==="grey"){
//e.target is which element was clicked 
//e.target.id is the id of the clicked element           
            body.style.backgroundColor="grey"
        }
        else if(e.target.id==="white"){
            body.style.backgroundColor="white"
        }
        else if(e.target.id==="blue"){
            body.style.backgroundColor="blue"
        }
        else if(e.target.id==="yellow"){
            body.style.backgroundColor="yellow"
        }
    })
})