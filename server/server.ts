/// <reference path="../typings/tsd.d.ts" />

import fs = require('fs');
import http = require('http');
import express = require('express');
var engines = require('consolidate');
var methodOverride = require('method-override');
var path = require('path');
var bodyParser:any = require('body-parser');
import BasicAuth = require('./BasicAuth');

var app = express();
app.use(BasicAuth.authenticator);
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/../app');
app.engine('html', engines.ect);
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '../app')));

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/partials/:name', function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name + '.html');
});

// redirect all others to the index (HTML5 history)
app.get('*', function(req, res){
    res.render('index.html');
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});



