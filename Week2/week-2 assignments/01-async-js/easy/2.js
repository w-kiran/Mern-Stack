var a=0

function counter()
{
    a=a+1;
    console.log(a)
    if(a<5)
    {
    setTimeout(counter,1000);
    }
}

counter();
