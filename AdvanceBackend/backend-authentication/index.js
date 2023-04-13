const app= require('./app');
const {PORT}=process.env;


app.listen(PORT,async()=>{
    try{
      console.log(`listening on ${PORT}`)
      console.log('db connected');
    }catch(err){
        console.log('problem in db connection',err)
    }
})