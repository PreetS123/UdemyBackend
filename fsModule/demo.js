let fs=require('fs');


fs.readFile('./db.json','utf-8',function(err,data){
    console.log(data);
});

fs.readdir('c:/',function(err,data){
    console.log(data);
});

// fs.writeFile('fsfile.txt','working with fs.write asynchronously',function(err,data){
//     if(err){
//         console.log('error occured',er);
//     }else{
//         console.log('message saved!');
//     }
// })

fs.appendFile('fsfile.txt','working with append-file asynchronously with the help of fs module',function(err){
    if(err){
        console.log(err);
    }
    console.log('message appended');
})


fs.mkdir('test',function(err){
    if(err){
        return console.log(err);
    }
    else{
       return console.log('created new directory');
    }
})

