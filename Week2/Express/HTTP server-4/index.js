const express = require("express")

const app = express()

app.get("/",function(req,res){
    throw new Error("efsdvef")    //500 error
})

app.listen(3000)