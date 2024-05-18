const { Router } = require("express");
const router = Router();

const userRouter = require('./user');
const accountRouter = require('./account');
router.get('/',(req,res)=>{
    console.log("hello");
})
router.use('/account',accountRouter)
router.use('/user',userRouter);

module.exports = router