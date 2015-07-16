var map = require('through2-map')
var http = require('http')
var server = http.createServer(function(req,res){
	if(req.method != 'POST')
		return res.end('Send me a POST method!')
	req.pipe(map(function (chuck){
		return chuck.toString().toUpperCase()
	})).pipe(res)
})
server.listen(Number((process.argv[2])))
