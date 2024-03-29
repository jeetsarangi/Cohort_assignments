const express = require('express');
const types = require('./types');
const cors = require('cors');
const app = express();
const port = 3000;
const {createtodo, updatetodo} = require("./types");
const {todoDb} = require("./db");


app.use(express.json());
app.use(cors());
app.post("/todo",async (req, res)=>{
  
    const createPayload = req.body;
    const parsedPayload = createtodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

   // put it in mongodb
    await todoDb.create({
        title: createPayload.title,
        description: createPayload.description,
        completed:false,
    })

    res.json({
        msg:"Todo created"
    })
})

app.put("/completed",async (req, res)=>{

    const updatePayload = req.body;
    const parsedPayload = updatetodo.safeParse(updatePayload);

   
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return;
    }

    await todoDb.updateOne({_id: updatePayload.id},{
        completed:true
    });

    res.json({
        msg:"Complete marked"
    })


})

app.get('/todos',async (req, res) => {
    
    const todos = await todoDb.find();
    res.json({todos});
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})