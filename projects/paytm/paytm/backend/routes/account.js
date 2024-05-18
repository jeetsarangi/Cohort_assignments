const { Router } = require("express");
const router = Router();
const zod = require("zod");
const authmiddleware = require("../middlewares/middleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");

router.get('/balance',authmiddleware,async (req, res)=>{

    const acc = await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance: acc.balance,
    })
})

router.post('/transfer',authmiddleware,async (req,res)=>{

    const session = await mongoose.startSession();
    session.startTransaction();
    const {amount, to} = req.body;

   try{ 
        const account = await Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if(!toAccount){
            await session.abortTransaction();
            return res.status(400).json({
                message: "User account not found!"
            });
        }

        // Perform the transfer
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        // Commit the transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer successful"
        });
        
    }
    catch{
        await session.abortTransaction();
        return res.status(400).json({
            message: "Error occurred retry after some time!"
        });
    }
})

module.exports = router