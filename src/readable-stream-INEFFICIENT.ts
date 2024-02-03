import { Readable } from 'stream';

// Inefficient way
const inStream = new Readable({
  read() {},
});

inStream.push('ABCDEFGHIJKLM');

inStream.push('NOPQRSTUVWXYZ');

inStream.push(null);

inStream.pipe(process.stdout);
