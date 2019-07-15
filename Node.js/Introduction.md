# Node.js

## Node.js is an open source server environment.
### Node.js allows you to run JS on the server.

```node
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
```

## What is Node.js?
- open source server environment
- free
- runs on various platforms
- uses JavaScript on the server
- asynchronous programming
