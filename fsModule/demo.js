let fs=require('fs');


fs.readFile('./db.json','utf-8',function(err,data){
    console.log(data);
});

fs.readdir('c:/',function(err,data){
    console.log(data);
});

fs.writeFile('fsfile.txt','working with fs.write asynchronously',function(err,data){
    if(err){
        console.log('error occured',er);
    }else{
        console.log('message saved!');
    }
})