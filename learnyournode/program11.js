var http = require('http')
var fs = require('fs')


function callback(req,res)
{
var fileStream = fs.createReadStream(process.argv[3])
	fileStream.pipe(res)			
}
var server = http.createServer(callback)
server.listen(Number(process.argv[2]))
