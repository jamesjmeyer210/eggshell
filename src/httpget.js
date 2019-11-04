function HttpGet(origin, port, path, headers){
	this.request = {
		hostname: orgin,
		port: port,
		path: path,
		method: 'GET',
		headers: headers,
	}

}