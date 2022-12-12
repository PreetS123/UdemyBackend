


let express= require('express');
let app= express();
app.use(express.json())

app.get('/',function(req,res){
    res.send('HELLO WORLD')
})



app.listen(8080,()=>{
    console.log('listening on port 8080')
})