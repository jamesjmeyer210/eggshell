const Assert = require('../src/assert.js');
let c = console;

let assert = new Assert();

// importing works
c.assert(assert != null);

// check for properties
c.assert(assert.message != undefined);
c.assert(assert.isLoggable != undefined);

// implement loggable
assert.isLoggable = true;

c.assert( false == assert.that("1 equals 2").equal(1, 2) );