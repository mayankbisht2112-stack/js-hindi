// function chai(){
//     console.log(`DB CONNECTED`)
// }



(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})(); // now it'll immediately invoked //
// make sure to end the IIFE function 
(() => {
    console.log(`DB CONNECTED TWO`);
})();


//if you want to pass parameter//
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("mayank");