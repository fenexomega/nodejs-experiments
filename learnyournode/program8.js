/* I DIDN'T LIKE THIS SOLUTION, IS NOT ASSYNCHONOUS AT ALL */
var url = process.argv[2]
var http = require('http')
var order = 0

function callback(response)
{
	var string = ''
	response.setEncoding('utf8')
	response.on('data',function(data){ string += data})
	response.on('end',function(end){ 
		console.log(string)
		http.get(process.argv[2+(++order)],callback)
	})
}
http.get(url,callback)
