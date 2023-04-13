const express= require('express');
require('dotenv').config();
const cors=require('cors');


const app= express();


app.get('/',(req,res)=>{
    res.send("Hello I am learning from Udemy Hitesh Choudhary course");
})


module.exports=app;