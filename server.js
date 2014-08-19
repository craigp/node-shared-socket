var net = require('net'),
  childProcess = require('child_process'),
  port = 1337, host = "127.0.0.1";

console.log("server process started on pid", process.pid);

var server = net.createServer();
server.listen(port, host, function() {
  console.log("server listening on " + host + ":" + port);
  childProcess.fork("./worker.js").send('server', server);
});

server.on("connection", function(socket) {
  console.log("connected to server");
  socket.setEncoding("utf8");
  socket.end("handled by server");
});


