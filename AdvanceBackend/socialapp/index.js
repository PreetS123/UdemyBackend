const express= require('express');
const format = require('date-format')


const app= express();

const PORT= 4000 ||process.env.PORT

app.get('/',(req,res)=>{
    res.send('Hello greetings from Preeti');
})

app.get('/api/v1/insta',(req,res)=>{
    const instaSocial={
        username:'preetisharma',
        followers:77,
        follows:200,
        date:format.asString('dd[MM] - hh:mm:ss', new Date()),
    };
    res.status(200).json(instaSocial)
})

app.get('/api/v1/facebook',(req,res)=>{
    const facebook={
        username:'preetisharma',
        followers:7,
        follows:2,
        date:format.asString('dd[MM] - hh:mm:ss', new Date()),
    };
    res.status(200).json(facebook)
})

app.get('/api/v1/linkedIn',(req,res)=>{
    const linkedin={
        username:'PreetiS123',
        followers:1295,
        follows:129,
        date:format.asString('dd[MM] - hh:mm:ss', new Date()),
    };
    res.status(200).json(linkedin)
})

app.get("/api/v1/:token",(req,res)=>{
    const path=req.params.token;
    res.status(200).json({params:path})
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})