'use strict';
// imports
const https = require("https");
const {URL} = require("url");
const HttpRequest = require('./httprequest');
// shorthand
const rule = console.assert;
const T = (thing) => { return typeof(thing) };

class HttpPost extends HttpRequest {

	// -> HttpPost
	constructor(origin, port, path, headers, body){
		super('POST', origin, port, path, headers);
		this.setBody(body);
	}

	// -> HttpPost
	static easy(url, headers, body) {
		rule(T(url) == 'string' && T(headers) == 'object' && T(body) == 'string');
		
		url = new URL(url);
		return new this(url.origin, url.port, url.href, headers, body);
	}

	// -> this
	setBody(reqbody){
		if(typeof(reqbody) == 'object'){
			this.body = JSON.stringify(reqbody);
		}
		else if(typeof(reqbody) == 'string'){
			this.body = reqbody;
		}
		else{
			this.body = reqbody.toString();
		}

		return this;
	}

	send(){
		let req = https.request(this.request, (res) => {
			this.response.status = res.statusCode;
			this.response.headers = res.headers;

			res.on('data', (data) => {
				this.response.body = this.response.body.concat(data.toString());
			});
			res.on('error', this.onErr);
			res.on('end', this.onOk);
		});

		req.write(this.body);	
		req.end();
	}

}

module.exports = HttpPost;