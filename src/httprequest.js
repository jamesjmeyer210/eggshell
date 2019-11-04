'use strict';

const https = require('https');

class HttpRequest {

	constructor(method, origin, port, path, headers){
		this.request = {
			hostname: origin,
			port: port,
			path: path,
			method: method,
			headers: headers,
			rejectUnauthorized: false,
			requestCert: true,
			agent: false
		};

		this.response = {
			status: 0,
			headers: {},
			body: '',
		};
	}

	ok(action){
		console.assert(typeof(action) == 'function');
		this.onOk = action;
		return this;
	}

	err(action){
		console.assert(typeof(action) == 'function');
		this.onErr = action;
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

		//req.write();
		req.end();
	}

	toCurl(){
		
		let curl = `curl -X ${this.request.method} ` +
			`${this.request.hostname}:${this.request.port}/${this.request.path} `;

		if(this.request.rejectUnauthorized == false){
			curl = curl.concat(`--insecure `);
		}

		const headers = [Object.keys(this.request.headers),Object.values(this.request.headers)];
		for(let i = 0; i < (headers[0].length + headers[1].length)/2; i++){
			curl = curl.concat(`-H '${headers[0][i]}:${headers[1][i]}'`);
		}

		return curl;
	}
};

module.exports = HttpRequest;