function Assert() {
	this.message = '\n';
	this.isLoggable = false;
	this.assetions = []; // TODO: how many assetions

	this.that = (message) => {
		this.message = this.message.concat(message);
		return this;
	};

	this.equal = (standard, comparable) => {
		if(standard.toString() == comparable.toString()){
			return true;
		}
		else {
			this.message = this.message.concat(`\nExpected: ${standard}\nGot: ${comparable}`);
			
			if(this.isLoggable){
				console.error(this.message);
			}

			return false;
		}
	};

	this.notEqual = (standard, comparable) => {
		return !this.equal(standard, comparable);
	};
}

module.exports = Assert;