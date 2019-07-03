const express = require('express');
const app = express();
const port = 3000;

// middleware 1

app.get('/', (req, res) => {
    console.log('/ 요청 받음');
    res.send('<h1>Home Page</h1>')
})

app.listen(port, () => {
    console.log('Server listening...' + port);

});