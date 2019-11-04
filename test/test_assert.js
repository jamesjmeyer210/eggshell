const Assert = require('../src/assert.js');
let assert = console.assert;

// importing works
assert(Assert != undefined);

assert( false == Assert.equal(1, 2) );

assert( true == Assert.that('1 + 1 equals 2').equal(1 + 1, 2));