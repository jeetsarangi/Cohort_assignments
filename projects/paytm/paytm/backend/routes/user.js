const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const zod = require("zod")
const {createUser,loginUser, updateUserinfo} = require('./types')
const {User, Account} = require('../db')
const SECRET_KEY = require("../config");
const authmiddleware = require("../middlewares/middleware");


router.post('/signup', async (req, res)=>{
    
    const payload = req.body;
    
    const parseCheck = createUser.safeParse(payload);
    if(!parseCheck.success){
        res.status(411).json({
            msg:"incorrect inputs"
        })
        return;
    }
    
    const checkDbExists = await User.findOne({username:payload.username});
    if(checkDbExists)
    {   res.status(411).json({
                msg: "username already taken"
        })
        return;
    }

    const user = await User.create({
        "username": payload.username,
        "password": payload.password,
        "firstName": payload.firstName,
        "lastName": payload.lastName
    })

    await Account.create({
        userId: user._id,
        balance: 1 + Math.random() * 10000
    })
    
    res.status(200).json({
        msg:"User created successfully",
        token: jwt.sign({userId: user._id}, SECRET_KEY)
    });


})

router.post('/signin',async (req,res)=>{

    const payload = req.body;
    const parseCheck = loginUser.safeParse(payload);
    if(!parseCheck.success){
        res.status(411).json({
            msg:"incorrect inputs"
        })
        return;
    }
    
    const user = await User.findOne({username:payload.username, password:payload.password});
    if(user)
    {   
        res.json({
            token: jwt.sign({userId: user._id}, SECRET_KEY)
        });
        return;
    }

    res.status(411).json({
        msg: "incorrect password"
    })


})

router.put('/', authmiddleware ,async (req,res)=>{

    const payload = req.body;
    const {success} = updateUserinfo.safeParse(payload);
    if(!success){
        res.status(411).json({
            msg:"Error while updating"
        })
        return;
    }

    await User.updateOne({_id:req.userId}, payload);

    res.json({
        msg:"Updated Successfully!"
    })

})

router.get('/bulk',authmiddleware,async (req,res)=>{

    const filter = req.query.filter || "";
    console.log(filter);
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
        user: users.map(usr=>({
            username: usr.username,
            firstName: usr.firstName,
            lastName: usr.lastName,
            userId: usr._id
        }))
    })
})

module.exports = router
