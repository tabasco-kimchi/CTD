const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
 }));
 

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.post('/post', (req, res) => {
    console.log('/post 요청');
    console.log(req.body);
    res.send(req.body);
});


app.listen(port, () => {
    console.log('server listening...' + port);

});