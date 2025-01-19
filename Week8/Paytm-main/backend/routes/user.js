const express = require('express');
const z = require("zod");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const {User} = require("../db");
const { Account } = require("../db");
const authMiddleware= require("./middlewares");

const router = express.Router();
const app = express();
app.use(express.json());

const signUpData = z.object({
    username:z.string().email(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string().min(8)
});

router.post('/signup',async (req,res)=>{

    const validfromzod = signUpData.safeParse({
        username:req.body.username,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password,
    });
   console.log(validfromzod.success);

    if (!validfromzod.success) {
        return res.status(400).json({
            msg: "Invalid inputs, please try again.",
            errors: validfromzod.error.format()
        });
    } 

const existingUser = await User.findOne({
    username:req.body.username
})

if(existingUser){
    return res.send("User already exists...")
}

const user = await User.create({
    username:req.body.username,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    password:req.body.password,
})

const userId = user._id;

 const account = await Account.create({
    userId,
    balance: Math.random() * 25000 
});
 
const token = jwt.sign({
    userId
}, JWT_SECRET);

res.json({
    msg:"user created successfully...",
    token: token,
    balance:account.balance
})

});

const signinData = z.object({
    username:z.string().email(),
    password:z.string().min(8)
})

router.post("/signin",async (req,res)=>{
const {success} = signinData.safeParse(req.body);
if(!success){
    return res.status(411).json({
        message: "Incorrect inputs"
    })
}

    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({
        username:username,
        password:password
    })

    if(existingUser){
        const token = jwt.sign({
            userId:existingUser._id
        },JWT_SECRET);

        res.json({
            token:token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
})

const updateInfo = z.object({
    password:z.string().min(8).optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
})

router.put("/",authMiddleware,async (req,res)=>{

    const {success} = updateInfo.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    await User.updateOne({
        _id:req.userId
    },req.body)

    res.json({
        msg:"Info updated successfully....."
    })

})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;