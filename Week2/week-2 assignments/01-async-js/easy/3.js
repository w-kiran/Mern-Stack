
const fs = require('fs');
function exp(n)
{
    var a=0
    for ( var i=0;i<n;i++)
    {
        a=a+1;   
    }
      console.log(a)
    
}

// Asynchronous read
fs.readFile('a.txt', 'utf-8', (err, data) => {
  console.log(data);
});

{
exp(10000)
}
exp(1000000000)







