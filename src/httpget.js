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
		super('GET', origin, port, path, headers);
	}

	// -> HttpGet
	static easy(url, headers) {
		rule(T(url) == 'string' && T(headers) == 'object');
		
		url = new URL(url);
		return new this(url.origin, url.port, url.href, headers, body);
	}

}

module.exports = HttpGet;