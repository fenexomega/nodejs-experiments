var fileName = process.argv[2];
var fs = require('fs');

function callback(err,data){
	var lines = data.toString().split('\n').length - 1;
	console.log(lines);
	
};

fs.readFile(fileName,callback);
