const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const users =[{
    name:"John",
    kidneys:[{
        healthy: false
    }]
}] ;

app.use(express.json())
app.get("/",function(req,res){
    const johnKidneys= users[0].kidneys;
    const no_of_kidneys=johnKidneys.length;
    let no_of_healthy_kidneys=0;

    for (let i=0;i<johnKidneys.length;i++)
    {
        if(johnKidneys[i].healthy)
        {
            no_of_healthy_kidneys = no_of_healthy_kidneys +1;
        }
    }
 
    const no_of_unhealthy_kidneys= no_of_kidneys - no_of_healthy_kidneys;

    res.json(
        {
            no_of_kidneys,
            no_of_healthy_kidneys,
            no_of_unhealthy_kidneys
        }
    )
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy; 
    users[0].kidneys.push ({
        healthy : isHealthy
    }) 
    res.json (
        {
            msg:"Done"
        }
    )
})
// {
//     "isHealthy": true
// }
// ADD this to body when POST.


app.put("/",function(req,res){
    for (let i=0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy= true;
    }
    res.json({});
})


app.delete("/",function(req,res){
    if(isThereAtleastOneUnhealthyKidney())
    {
    const newKidneys =[];
    for (let i=0;i<users[0].kidneys.length;i++)
        {
           if( users[0].kidneys[i].healthy)
           {
            newKidneys.push(
                {
                    healthy:true
                }
            )
           }
        }
        users[0].kidneys = newKidneys;    
        res.json({msg:"done"}) 
    }
    else{
        res.status(411).json({
            msg:"You don't have bad kidneys"
        })
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (!users[0].kidneys[i].healthy) {
        atleastOneUnhealthyKidney = true;
      }
    }
    return atleastOneUnhealthyKidney;
  }
  
app.listen(3000)