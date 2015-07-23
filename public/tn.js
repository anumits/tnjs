// selector code

// event code

// animation code

// ajax code
window.$ = {};
$.ajax = function(url, method, callback) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		var DONE = this.DONE || 4;
		if(this.readyState === DONE){
			callback(this.responseText);
		}
	};
	
	request.open(method.toUpperCase(), url);
	request.send();
};
