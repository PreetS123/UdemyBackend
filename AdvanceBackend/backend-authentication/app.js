const express= require('express');
require('dotenv').config();
const cors=require('cors');
const User= require('./model/User.model');

const app= express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello I am learning from Udemy Hitesh Choudhary course");
})

app.post('/register',async (req,res)=>{
    const {firstname,lastname,email,password}= req.body;
    if(!(email&& password && firstname && lastname)){
        res.status(400).send('All fiels are required');
    }
    const existingUser= await User.findOne({email});
    if(existingUser){
        res.status(401).send('User already exist');
    }
})


module.exports=app;