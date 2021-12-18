var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as "Hello World"
   response.end('<h1><center>This is a nodejs <i>helow world </i> program</center></h1>');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
