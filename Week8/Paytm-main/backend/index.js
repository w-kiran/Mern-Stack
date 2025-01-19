const express = require("express");
const cors = require("cors");
const rootRouter = require("../backend/routes/index")
// const bodyParser = require("body-parser")
const port = 3000 || 3002;


const app = express();
app.use(cors()); 
app.use(express.json());
app.use("/api/v1", rootRouter);


app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
})