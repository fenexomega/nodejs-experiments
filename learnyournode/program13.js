var http = require('http')
var url = require('url')

function parseUnixTime(time)
{
	var  myDate = new Date(time) 
	return {
		"unixtime": myDate.getTime()
	}
}

function parseIsoTime(time)
{
	var  myDate = new Date(time)
	return {
		'hour': myDate.getHours(),
		'minute': myDate.getMinutes(),
		'second': myDate.getSeconds(),
	}	
	
}

var server = http.createServer(function(req,res){
	if(req.method != 'GET')
		res.end('Send me a get method!')
	var request = url.parse(req.url,true)
	var json;
	if(request.pathname == '/api/parsetime')
		json = parseIsoTime(request.query.iso)
	else if(request.pathname == "/api/unixtime")
		json = parseUnixTime(request.query.iso)
	
	if(json)
	{
		res.writeHead(200,{'Content-Type':'application/json'})
		json = JSON.stringify(json)
		res.end(json)
	}
	else
	{		
		res.writeHead(404)
		res.end('404')
	}
	
})
server.listen(Number(process.argv[2]))

