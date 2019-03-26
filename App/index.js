var express = require('express');

var app = express();

if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
     }

app.get('/', function(req, res){
    res.send('Hello World!')
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});

