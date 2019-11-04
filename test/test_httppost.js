'use strict';

const HttpPost = require('../src/httppost');

{
	console.assert(HttpPost != undefined);

	console.log(typeof(HttpPost));

	console.assert(HttpPost.easy != undefined);
}

let headers = {
	'Accept':'application/json; charset utf-8',
	'Content-type':'application/json; charset utf-8',
};

let post = HttpPost.easy('https://127.0.0.1:443', headers, '{"greeting":"hello, friendly server"}');

try {
	post.ok(() => {
		console.log('ok');
	}).err(() => {
		console.log('err');
	}).send()
}
catch(ex){
	console.log(ex);
}