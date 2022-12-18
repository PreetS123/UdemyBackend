const express= require('express');
const app= express();// express() function creates an instance express application object with methods of routing http request. It is called app by tradition.

// joi is used for validation.
const Joi = require('@hapi/joi');
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

app.get('/api/fruits',(req,res)=>{
    res.send(fruits);
})

app.get('/api/fruits/:id',(req,res)=>{
    const fruit= fruits.find(c=>c.id===parseInt(req.params.id));
    if(!fruit){
        res.status(404).send('fruit not found');
    }else{
        res.status(200).send(fruit);
    }
})


app.post('/api/fruits',(req,res)=>{
    const {error}= validateFruit(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    const fruit={
        id:fruits.length+1,
        name:req.body.name
    };
    fruits.push(fruit);
    res.send(fruit);
})


app.put('/api/fruits/:id',(req,res)=>{
    const fruit= fruits.find(c=>c.id===parseInt(req.params.id));
    if(!fruit){
        return res.status(404).setDefaultEncoding('Fruit Not Found!');
     }
        const {error}= validateFruit(req.body);
        if(error){
                return res.status(400).send(error.details[0].message);
        }
        fruit.name= req.body.name;
        return res.send(fruit);
    
})

app.delete('/api/fruits/:id',(req,res)=>{
    const fruit= fruits.find(c=>c.id===parseInt(req.params.id));
    if(!fruit){
        return res.status(404).send('fruit not found');
    }
    const index=fruits.indexOf(fruit);
      fruits.splice(index,1);
      res.send(fruit);
})

function validateFruit(fruit){
    const schema=Joi.object({
        name:Joi.string().min(3).required()
    });
    const validation=schema.validate(fruit);
    return validation;
}

const port=process.env.PORT||5001;
app.listen(port,()=>{
    console.log(`listening on port ${port}....`);
})

