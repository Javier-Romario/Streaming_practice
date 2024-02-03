import { Writable } from 'stream';

console.log('bout to echo');

const outputStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    // if (chunk.toString().includes('Lorem')) {
    //   console.log('found a Lorem \n\n');
    // }
    callback();
  },
});

process.stdin.pipe(outputStream);
