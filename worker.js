console.log("worker process started on pid", process.pid);

process.on("message", function(msg, handle) {
  if (/server/.test(msg)) {
    console.log("server message received:", msg);
    handle.on("connection", function(socket) {
      console.log("connected to worker");
      socket.end("handled by worker");
    });
  }
});
