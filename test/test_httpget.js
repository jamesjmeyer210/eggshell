'use strict';
// imports
const HttpGet = require('../src/httpget');
// shorthand
const assert = console.assert;
const log = console.log;

// test import and basic constructors
{
    assert(HttpGet != undefined);
    assert(HttpGet.easy != undefined);
    assert(null != HttpGet.easy('https://www.google.com/', {}));
}
// validate constructor behavior
{
    let req = HttpGet.easy('https://www.google.com/', {});

    assert('GET' == req.request.method);
    assert('https://www.google.com' == req.request.hostname);
    assert(443 == req.request.port);
    assert('/' == req.request.path);
}