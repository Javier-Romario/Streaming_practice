// It is much better to push the data on demand instead of pushing before the pipe to stdout stream
// WHEN a consumer asks for data
// this can be done by implementing the read method in the config object
// this script can be used via `node --import tsx/esm src/readable-stream-EFFICIENT.ts `
import { Readable } from 'stream';

const inStream = new Readable({
  read(size) {
    // a user has demanded some data .. someone wants to read it
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  },
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);
