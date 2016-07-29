var express = require('express')
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello Trello!');
});

app.listen(3000, function () {
    console.log('listening on prot 3000!')
});