var ws = require('websocket-stream');
var ws = ws('ws://localhost:8099');
ws.write('hello\n');
