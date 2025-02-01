import express from 'express'
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors'
import jwt from 'jsonwebtoken'; 
import cookieParser from 'cookie-parser';

const port = 3000;
const secretKey = "blablabla"

const app = express();
const server = createServer(app)

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods: ["GET","POST"],
        credentials: true,
    }
})

app.use(cors({
    origin:"http://localhost:5173",
    methods: ["GET","POST"],
    credentials: true,
}))

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.get("/login",(req,res)=>{
    const token=jwt.sign({_id:"sdhjvsdjvbs"},secretKey)

    res.cookie("token",token, {httpOnly: true, secure:true, sameSite:'none'}).json({
        messsage:"Login successful"
    })
})

const user = false;
io.use((socket,next)=>{
    cookieParser()(socket.request, socket.request.res, (err)=>{
        if(err) return next(err)

        const token = socket.request.cookies.token;

        if(!token) return next(new Error("Authentication Error"))

        const decoded = jwt.verify(token,secretKey)
        next();

    })
    if(user) next()
})

io.on("connection",(socket)=>{
    console.log("User connected",socket.id);

    socket.on("message",({room,message})=>{
        console.log({room,message});
        io.to(room).emit("receive-message",message)
    })
    // socket.emit("welcome",`Welcome to the server,${socket.id}`)
    // socket.broadcast.emit("welcome",`${socket.id} joined the server,`)

    socket.on("join-room",(room)=>{
        socket.join(room)
        console.log(`User joined room ${room}`);
    })

    socket.on("disconnect",()=>{
        console.log("User disconnected",socket.id);
    })
})

server.listen (port, () => {
    console.log(`Server is running on port ${port}`);  
})

