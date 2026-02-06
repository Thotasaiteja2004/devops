const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("HTTP module example");
}).listen(6060);

console.log("HTTP server running at http://localhost:6060");
