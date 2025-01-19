var a=0

function counter()
{
    a=a+1;
    console.log(a)
}


let counter1=setInterval(counter,1000) 


setTimeout(()=>{
    clearInterval(counter1);
    console.log("It has been 4 second it is time to stop.")
  },5000);