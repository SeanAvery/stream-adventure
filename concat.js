var fs = require('fs')
var concat = require('concat-stream')

// var readStream = fs.createReadStream(process.stdin)
// var concatStream = concat(gotFile)
//
// readStream.pipe(concatStream)
//
// function gotFile(fileBuffer) {
//   console.log('fileBuffer', fileBuffer)
// }


process.stdin.pipe(concat(function(data) {
  console.log(data.toString().split('').reverse().join(''))
}))
