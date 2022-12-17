let fs= require('fs');
let readableStreams= fs.createReadStream('streams.txt');
let data='';

readableStreams.setEncoding('utf-8');

readableStreams.on('data',function(chunk){
    data=chunk;
});

readableStreams.on('end',function(){
    console.log(data);
})

