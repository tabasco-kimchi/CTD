# Node.js File System Module

## Node.js as a File Server

> The Node.js file system module allows you to work with the file system on your computer.<br>
To include the File System module, use the require() method:

```js
var fs = require('fs');
```
### Common use for the file system module:
- Read files = fs.readFile()
- Create files = fs.appendFile()/fs.open()/fs.writeFile()
- Update files = fs.appendFile()/fs.writeFile()
- Delete files = fs.unlink()
- Rename fiels = fs.rename()
<br>

### 01. Read Files

> The **fs.readFile()** method is used to read files on computer. 

> If there is html file in the same directory, <br> **Can Call html file in the node.js file *simply* typing fs.readFile('demofile1.html').**<br> Adating html file by excuting *"file system"*

### 02. Create Files

- fs.appendFile() <br>
:  appends specified content to a file. no file -> create

- fs.open() <br>
: takes a "flag" as the second argument <br>
if the flag is "w" for "writing", the specified file is opened for writing. <br> 
if the file does not exist, an empty file is creted
