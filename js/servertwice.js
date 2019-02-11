var http = require('http');
var server = http.createServer(function(request, response) {
    {
        response.writeHead(200, { "content-type": "text/html" });
        response.write("<h1>NODE</h1>");
        console.log("hey");
        response.end();
    }
}).listen(8080);
console.log("Server started, Access it using browser");