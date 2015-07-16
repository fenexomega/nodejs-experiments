
{
	function filterDir(Dir,format,callback)
	{
		var format = "." + format

		var fs = require('fs')
		var path = require('path')

		function func(err, list)
		{
			if(err)
				return callback(err)
			list = list.filter(function(e){
							return	(path.extname(e) === format)
								})
			callback(err,list)
		}
		fs.readdir(Dir,func)
	}
}

module.exports = filterDir
