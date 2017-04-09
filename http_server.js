var http = require('http')
var through2 = require('through2')

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.pipe(through2(function(buf, _, next) {
      this.push(buf.toString().toUpperCase())
      next()
    })).pipe(res)
  }
})

server.listen(process.argv[2])
