var fs = require('fs');
var content = fs.readFileSync(process.argv[2]);
var str = content.toString();
str = str.split('\n');
console.log(str.length - 1);

