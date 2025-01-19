const express = require('express');
const authMiddleware = require('./middlewares');
const {Account } = require('../db');
const { mongo, default: mongoose } = require('mongoose');
const router = express.Router();

// router.get("/balance",authMiddleware,async(req,res)=>{

//     const account = await Account.findOne({
//         userId:req.userId
//     });
//     console.log(account);
//     console.log(account.balance)
//     res.json({
//         balance:account.balance
//     })
// })

router.get("/balance", authMiddleware, async (req, res) => {
    try {
        const account = await Account.findOne({ userId: req.userId });
        if (!account) {
            return res.status(404).json({ msg: "Account not found" });
        }
        console.log(account);
        console.log(account.balance);
        res.json({
            balance: account.balance
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
});


router.post("/transfer",authMiddleware,async(req,res)=>{

    const session = await mongoose.startSession(); //session starts here
    session.startTransaction();
    const { amount , toB } = req.body;
    console.log(amount,toB);
    const account = await Account.findOne({
        userId:req.userId
    }).session(session)

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"Insufficient balance .."
        })
    }

    const toAccount = await Account.findOne({
        userId:toB
    }).session(session)

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"Invalid account"
        });
    }

    await Account.updateOne({
        userId:req.userId
    },
    {
        $inc:{
            balance:-amount
        }
    },
    {session}
 )
   await Account.updateOne({
        userId:toB
       },
    {
     $inc:{
        balance:amount
     }
    },
    {session})

    await session.commitTransaction();//session ends here
    session.endSession(); 
    
    res.status(200).json({
        msg: "Transfer successful"
    });
})

module.exports = {
    router,
};

// module.exports = router;
