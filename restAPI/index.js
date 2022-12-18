const express= require('express');
const app= express();// express() function creates an instance express application object with methods of routing http request. It is called app by tradition.
const joi= require('joi');// joi is used for validation.
app.use(express.json());// it is inbuilt method in express to recognize the incoming request object as a json object.
                        // This method is called as a middleware.

// app.use() acts as a middleware in express apps
//A middleware is basically a function that will receive the request and response objects ,
  // just like your route Handlers do.

const fruits=[
    {name:'Apples',id:1},
    {name:'Mango',id:2},
    {name:'Guava',id:3},
    {name:'Cherries',id:4},
    {name:'Dates',id:5},
    {name:'Grapes',id:6},
    {name:'Lemon',id:7},
    {name:'Melons',id:8},
    {name:'Peach',id:9},
    {name:'Pears',id:10},
    {name:'Fig',id:11},
    {name:'Water melon',id:12}

];

// read request handler
// Request handles are the functions that handle the client request and construct a response


app.get('/',(req,res)=>{
    res.send('WELCOME TO THE WORLD OF BACKEND')
})



