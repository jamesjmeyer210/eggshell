'use strict';
// imports
const https = require("https");
const {URL} = require("url");
const HttpRequest = require('./httprequest');
// shorthand
const rule = console.assert;
const T = (thing) => { return typeof(thing) };

class HttpGet extends HttpRequest {

	// -> HttpGet
	constructor(origin, port, path, headers){
		rule(T(origin) == 'string', T(port) == 'string', T(path) == 'string', T(headers) == 'object');
		super('GET', origin, port, path, headers);
	}

	// -> HttpGet
	static easy(url, headers) {
		rule(T(url) == 'string', T(headers) == 'object');
		let u = new URL(url);

		return new HttpGet(u.origin,
			(u.port == '' || u.port == undefined) ? 443 : u.port,
			(u.path == '' || u.paht == undefined) ? '/' : u.path,
			headers);
	}

}

module.exports = HttpGet;