var split = require('split')
var through2 = require('through2')
var i = 0;
process.stdin
  .pipe(split())
  .pipe(through2(function(line, _, next) {
    var line = line.toString()
    this.push(i % 2 === 0
      ? line.toLowerCase() + '\n'
      : line.toUpperCase() + '\n')
    i++
    next()
  }))
  .pipe(process.stdout)
