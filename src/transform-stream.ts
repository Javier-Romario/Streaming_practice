// A transform stream is the more interesting duplex stream because its output is computed from its input.
//
// For a transform stream, we don’t have to implement the read or write methods, we only need to implement a transform method

import { Transform } from 'stream';

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
