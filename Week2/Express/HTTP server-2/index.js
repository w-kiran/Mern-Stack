const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.json())


app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send('<b>Hello World!</b>')
})

app.get("/route-handler", function (req, res) {
    res.json({
        name:"kiran",
        age:"guess"
    })
})

app.post('/conversation', function (req, res) {
    console.log(req.body)
    res.send({
        msg:"2+2=4"
    })
}) 

app.post('/backend-api/conversations', function (req, res) {
    const message = req.query.message;
    console.log(message)
    const message2 = req.body.message;
    console.log(message2)
    res.json({
        output:"2+2=4"
    })
}) 

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})