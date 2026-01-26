const buttons=document.querySelectorAll('.button') // we are storing all html collection in buttons 
// what does button contains: nodelist(4) [span.button, span.button, span.button, span.button]
const body=document.querySelector('body')
buttons.forEach(function(b){
    b.addEventListener('click',function(e){
        if(e.target.id==="grey"){
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