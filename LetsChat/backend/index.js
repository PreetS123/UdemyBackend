var express= require('express');
var cors= require('cors');

const app= express();
app.use(express.json());
app.use(cors());


const port= process.env.PORT|| 5001;
app.listen(port,()=>{
    console.log(`listening on port ${port}....`)
})
