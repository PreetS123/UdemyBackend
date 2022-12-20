var express= require('express');
var cors= require('cors');
const { urlencoded } = require('express');

const app= express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));
app.use(urlencoded({extended:false}))

var messages=[
  {
    name:'Preeti',
    message:'Hello'
  },
  {
    name:'Viabhav',
    message:'Hi'
  }
]
app.get('/messages',(req,res)=>{
    // console.log(req);
    res.send(messages)
})
app.post('/messages',(req,res)=>{
    messages.push(req.body);
    res.status(200).send('created')
})

const port= process.env.PORT||5001;
app.listen(port,()=>{
    console.log(`listening on port ${port}....`)
})
