# Node.js Modules

### What is a Module in Node.js?

- same as JS libraries.
- A set of functions included in your applications.

## Built-in Modules
- Without any further installation


## Include Modules

> To include a module, use the **require()** function with the name of the **module**

```js
var http = require('http');
```

> Now your application has access to the HTTP module, and is able to create a server

```js

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
```

## Create my Own Modules

> You can create your own modules, and easily include them in your applications.
> The following example creates a module that returns a date and time object:

```js
export.myDateTime = function () {
    return Date();
};
```

> Use the **exports** keyword to make properties and methods available outside the module file.

Save the code above in a file called "myfirstmodule.js"

## Include your own module
### *Now can include and use the module in any of your Node.js files.*

Use the module "myfirstmodule" in a Node.js file

```js

var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
    }).listen(8080);
    
}