let fs= require('fs');
let readableStreams= fs.createReadStream('streams.txt');
let writableStream= fs.createWriteStream('pipeStream1.txt');

readableStreams.pipe(writableStream);