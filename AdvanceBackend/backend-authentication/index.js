const app= require('./app');
const {PORT}=process.env;
const connection=require('./config/database');

app.listen(PORT,async()=>{
    try{
      await connection;
      console.log(`listening on ${PORT}`)
      console.log('db connected');
    }catch(err){
        console.log('problem in db connection',err)
    }
})