//Dumb way of doing input validation and authentication
// const express = require("express");
// const app = express();

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId; 

//   if (username != "kiran" || password != "pass") {
//     res.status(400).json({ "msg": "Somethings up with your inputs" });
//     return;
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({ "msg": "Somethings up with your inputs" });
//     return;
//   }

//   // do something with kidney here
//   res.json({
//     msg: "Your kidney is fine!",
//   });
// });

// app.listen(3000)

const express = require("express");
const app = express();
function userMiddleware(req,res,next){
    const username = req.headers['username'];
    const password = req.headers['password'];
    if(username!= "kiran" && password != "pass"){
        res.status(403).json({
            msg:"incorrect inputs try again",
        })
    }else{
        next();
    }
}
function kidneyMiddlewre(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg:"incorrect inputs",
        })
    }else{
        next();
    }
}
app.get("/isHealthy", userMiddleware , kidneyMiddlewre, function(req,res){
    res.send("You are healthy");
})
app.get("/kidneyIsHealthy", userMiddleware , kidneyMiddlewre, function(req,res){
    res.send("Your Kidney is healthy");
})
app.get("/heartIsHealthy", userMiddleware , function(req,res){
    res.send("Your heart is healthy");
})
app.listen(3000);