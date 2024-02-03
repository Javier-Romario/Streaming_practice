import { Duplex } from 'stream';

const inStream = new Duplex({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  },
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
});

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);
