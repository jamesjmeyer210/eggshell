const HttpRequest = require('../src/httprequest');

console.assert(HttpRequest != undefined);

let headers = {
	'Accept':'application/json; charset utf-8',
};

// test the standard http request
{
	let req = new HttpRequest('GET', 'www.google.com', 443, '', headers);

	// with error case
	req.ok( () => {
		console.assert(req.response.status == 200);
		console.assert(req.response.headers != null);
		console.assert(req.response.body > '');
	}).err( () => {
		console.log('There was an error :O');
	}).send();

	// no error case 
	req.ok( () => {
		console.assert(req.response.status == 200);
		console.assert(req.response.headers != null);
		console.assert(req.response.body > '');
	}).send();

	console.assert(req.toCurl() === 'curl -X GET www.google.com:443/ --insecure -H \'Accept:application/json; charset utf-8\'');
}