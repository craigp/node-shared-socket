var net = require('net'),
  port = 1337,
  host = "127.0.0.1";

var client = net.createConnection(port, host, function() {
  console.log("connecting");
});

client.on('error', function() {
  console.log("error");
  console.log(arguments);
});

client.on("connect", function() {
  console.log("connected");
  // never gets to send
  client.setEncoding("utf8");
  client.write("this is a test");
});

client.on("data", function(data) {
  console.log("data:", data);
});

client.on("end", function() {
  console.log("socket end");
  process.exit();
});

