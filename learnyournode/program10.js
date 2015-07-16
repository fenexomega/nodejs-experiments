var net = require('net')
var strftime = require('strftime')

function returnDate()
{
	var date = new Date()	
	return strftime("%Y-%m-%d %H:%M",date)
}

var server = net.createServer(function(socket){
	var string = returnDate() 
	socket.write(string)
	socket.end()
})
server.listen(Number(process.argv[2]))
