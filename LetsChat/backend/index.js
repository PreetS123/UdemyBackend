var express= require('express');
var cors= require('cors');
// const mongoose= require('mongoose');
const app= express();
var http=require('http').Server(app);
var io= require('socket.io')(http);

const { urlencoded } = require('express');

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));
app.use(urlencoded({extended:false}))

// var Message=mongoose.model('Message',{
//   name:{type:String,required:true},
//   message:{type:String,required:true}
// })
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
    // const msg=Message.find()
    res.send(messages)
})
app.post('/messages',(req,res)=>{
  // var message=new Message(req.body);
  // message.save(err=>{
  //   if(err){
  //     res.status(500).send('err');
  //   } 
    messages.push(req.body);
    io.emit('message',req.body)
    res.status(200).send('created')
  // });
   
})

io.on('connection',(socket)=>{
    console.log('user connected');
})

const port= process.env.PORT||5001;
http.listen(port,()=>{
    console.log(`listening on port ${port}....`)
})
