var fileop = require('./fileop.js')

fileop(process.argv[2],process.argv[3],function(err,data){
												for(var v of data)
												console.log(v)
												})

