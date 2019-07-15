var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(8080);

<p>
The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.
</p>

<p>
Node.js files must be initiated in the "Command Line Interface" program of your computer.
</p>