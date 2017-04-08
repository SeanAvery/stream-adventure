console.log('beep boop')
var file = process.argv[2]
console.log('file', file)

var fs = require('fs')

fs.createReadStream(file).pipe(process.stdout)


