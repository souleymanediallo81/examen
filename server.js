const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const router = require('./api');

const port = 3000;
const app = express();



app.listen(port, function(){
    console.log("Server is listening at port: "+ port);
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use('/api', api);