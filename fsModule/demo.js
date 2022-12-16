let fs=require('fs');


fs.readFile('./db.json','utf-8',function(err,data){
    console.log(data);
});

fs.readdir('c:/',function(err,data){
    console.log(data);
});

