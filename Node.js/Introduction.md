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
- Open source server environment
- free
- Runs on various platforms
- Uses JavaScript on the server
- Asynchronous programming
------------------------------------

## Why Node.js?
<img src="img/1.png">

# What Can Node.js Do?

- Can generate dynamic page content
- Can create, open, read, write, delete, and close files on the server
- Can collect form data
- Can add, delete, modify data in your database

# What is a Node.js file?

- Node.js files contain tasks that will be executed on certain events
- A typical event is someone trying to access a port on the server
- Node.js files must be initiated on the server before having any effect
- Node.js files have extension ".js"