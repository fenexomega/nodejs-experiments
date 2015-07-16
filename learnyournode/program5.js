var Dir = process.argv[2]
var format = "." + process.argv[3]

var fs = require('fs')
var path = require('path')


function callback(err, list)
{
	var newList = []
	for(var v of list)
		if(path.extname(v) === format)
			console.log(v)
}

fs.readdir(Dir,callback)
