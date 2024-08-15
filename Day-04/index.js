const fs = require('fs');
const readablestream = fs.createReadStream('a.txt');

readablestream.on('data',(chunk) => {
    console.log(`Received ${chunk.length} bytes of data`);
})

readablestream.on('end',() => {
    console.log('Finished reading from file')
})