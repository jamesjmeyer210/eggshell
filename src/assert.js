class Assert {

	static that(message) {
		console.log(message);
		return Assert;
	};

	static equal(standard, comparable) {
		if(standard.toString() == comparable.toString()){
			console.log(`PASS: Expected: ${standard} Got: ${comparable}`);
			return true;
		}
		else {
			console.log(`FAIL: Expected: ${standard} Got: ${comparable}`);
			return false;
		}
	};

	static notEqual(standard, comparable) {
		return !this.equal(standard, comparable);
	};

}

module.exports = Assert;