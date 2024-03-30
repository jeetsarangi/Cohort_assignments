const express = require('express');
const cors = require('cors');
const app  = express();
const port  = 3000;

const {Cards} = require('./db');
const {createcard,deletecard} = require('./types');


app.use(express.json());
app.use(cors());


app.get('/cards',async (req,res)=>{
    
    const cards = await Cards.find();
    res.json({cards});
    
});

app.post('/add',async (req, res)=>{

    const addpayload = req.body;
    const parsedPayload = createcard.safeParse(addpayload);

    if(!parsedPayload){
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return;
    }

    console.log(addpayload.interest);

    await Cards.create({
        name: addpayload.name,
        description: addpayload.description,
        interests: addpayload.interest ,
        linkedin: addpayload.linkedin,
        twitter: addpayload.twitter
    })

    res.json({
        msg:"Created"
    })


});

app.put('/delete',async (req, res)=>{
    
    const updatePayload = req.body;
    const parsedPayload = deletecard.safeParse(updatePayload);

   
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return;
    }

    await Cards.findOneAndDelete({_id: updatePayload.id});

    res.json({
        msg:"Deleted"
    })

});

app.listen(port, ()=>{
    console.log("Listening on port"+port);
})