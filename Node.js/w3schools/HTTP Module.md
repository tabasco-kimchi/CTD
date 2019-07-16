# Node.js HTTP Module

## the built-in HTTP Module

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol(HTTP).

- To include the HTTP module, use the require() method:

```js
var http = require('http');
```

### Node.js as a Web Server

> The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
Use the **createServer()** method to create an HTTP server:

```js

var http = require('http');

// create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); // write a reponse to the client
    res.end(); // end the response
}).listen(8080); // the server object listens on port 8080
```
