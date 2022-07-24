const express = require('express');
const dbConnect = require('./mongoConnect');
const app = express();

app.use(express.json());

app.get("/",async (req,res)=>{
    const db = await dbConnect();
    const result = await db.find().toArray()
    res.send(result);
})



app.post('/',async (req,res)=>{
    
    const db = await dbConnect();
    const result = await db.insertOne(req.body);

    res.send(result);
});

app.listen(5000);