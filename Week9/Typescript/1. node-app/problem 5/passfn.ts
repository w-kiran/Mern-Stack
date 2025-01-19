// Create a function that takes another function as input, and runs it after 1 second.
function runAfter1S(fn:() => void){
    setTimeout(fn,1000);
}

runAfter1S(function(){
    console.log("hi there"); 
})